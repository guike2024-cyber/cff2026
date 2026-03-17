import { COOKIE_NAME } from "@shared/const";
import { getSessionCookieOptions } from "./_core/cookies";
import { systemRouter } from "./_core/systemRouter";
import { publicProcedure, router } from "./_core/trpc";
import { z } from "zod";
import nodemailer from "nodemailer";

export const appRouter = router({
    // if you need to use socket.io, read and register route in server/_core/index.ts, all api should start with '/api/' so that the gateway can route correctly
  system: systemRouter,
  auth: router({
    me: publicProcedure.query(opts => opts.ctx.user),
    logout: publicProcedure.mutation(({ ctx }) => {
      const cookieOptions = getSessionCookieOptions(ctx.req);
      ctx.res.clearCookie(COOKIE_NAME, { ...cookieOptions, maxAge: -1 });
      return {
        success: true,
      } as const;
    }),
  }),

  contact: router({
    sendEmail: publicProcedure
      .input(
        z.object({
          name: z.string().min(1, "Name is required"),
          email: z.string().email("Invalid email address"),
          company: z.string().optional(),
          phone: z.string().optional(),
          subject: z.string().optional(),
          message: z.string().min(1, "Message is required"),
        })
      )
      .mutation(async ({ input }) => {
        try {
          // Create transporter using Gmail SMTP
          const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
              user: process.env.GMAIL_USER,
              pass: process.env.GMAIL_PASSWORD,
            },
          });

          // Email content
          const htmlContent = `
            <h2>New Contact Form Submission</h2>
            <p><strong>Name:</strong> ${input.name}</p>
            <p><strong>Email:</strong> ${input.email}</p>
            ${input.company ? `<p><strong>Company:</strong> ${input.company}</p>` : ""}
            ${input.phone ? `<p><strong>Phone:</strong> ${input.phone}</p>` : ""}
            ${input.subject ? `<p><strong>Subject:</strong> ${input.subject}</p>` : ""}
            <p><strong>Message:</strong></p>
            <p>${input.message.replace(/\n/g, "<br />")}</p>
          `;

          // Send email
          await transporter.sendMail({
            from: process.env.GMAIL_USER,
            to: process.env.GMAIL_USER,
            replyTo: input.email,
            subject: `New Contact Form: ${input.subject || "General Inquiry"}`,
            html: htmlContent,
          });

          return {
            success: true,
            message: "Email sent successfully",
          };
        } catch (error) {
          console.error("Failed to send email:", error);
          throw new Error("Failed to send email. Please try again later.");
        }
      }),
  }),
});

export type AppRouter = typeof appRouter;
