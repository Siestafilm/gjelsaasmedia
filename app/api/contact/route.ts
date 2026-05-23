import { Resend } from "resend";

export async function POST(request: Request) {
  const resend = new Resend(process.env.RESEND_API_KEY);

  const formData = await request.formData();

  const name = String(formData.get("name") || "");
  const email = String(formData.get("email") || "");
  const subject = String(formData.get("subject") || "Ny melding fra nettsiden");
  const message = String(formData.get("message") || "");

  await resend.emails.send({
    from: "Gjelsås Media <onboarding@resend.dev>",
    to: "thomas@gjelsaas.no",
    replyTo: email,
    subject: `Kontaktskjema: ${subject}`,
    text: `
Navn: ${name}
E-post: ${email}

Melding:
${message}
`,
  });

  return Response.redirect(new URL("/?sent=1#kontakt", request.url));
}