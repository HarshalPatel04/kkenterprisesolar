export async function POST(req) {
  try {
    const body = await req.json();

    const data = await resend.emails.send({
      from: "KK Enterprise <info@kkenterprisesolar.com>",
      to: "info@kkenterprisesolar.com",
      subject: "New Contact Form Submission",
      html: "<h1>Hello</h1>",
    });

    console.log(data);

    return Response.json({ success: true });

  } catch (error) {
    console.log("EMAIL ERROR:", error);

    return Response.json({
      success: false,
      error: error.message,
    });
  }
}