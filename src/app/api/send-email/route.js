import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req) {
    try {
        const body = await req.json();

        const { firstName, lastName, email, phone, message } = body;

        const data = await resend.emails.send({
            from: "onboarding@resend.dev",
            to: "kkenterprise0410@gmail.com",
            subject: `New Inquiry from ${firstName} ${Date.now()}`,
            replyTo: email,
            html: `
        <h2>New Website Inquiry</h2>
        <p><strong>Name:</strong> ${firstName} ${lastName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Message:</strong> ${message}</p>
      `,
        });

        console.log(data);

        return Response.json({ success: true });
    } catch (error) {
        console.log("EMAIL ERROR:", error);
        return Response.json({ success: false });
    }
}