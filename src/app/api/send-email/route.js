import { Resend } from "resend";

export const dynamic = "force-dynamic"; // 🔥 IMPORTANT

export async function POST(req) {
  try {
    const resend = new Resend(process.env.RESEND_API_KEY);

    const body = await req.json();
    const { firstName, lastName, email, phone, message } = body;

    const { data, error } = await resend.emails.send({
      from: "KK Enterprise <onboarding@resend.dev>",
      to: "hp2726975@gmail.com", // your verified email
      subject: "New Contact Form Submission",
      html: `
        <h2>New Website Inquiry</h2>
        <p><strong>Name:</strong> ${firstName} ${lastName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Message:</strong> ${message}</p>
      `,
    });

    console.log("RESEND RESPONSE:", data, error);

    return Response.json({ success: true });
  } catch (err) {
    console.log("EMAIL ERROR:", err);
    return Response.json({ success: false });
  }
}