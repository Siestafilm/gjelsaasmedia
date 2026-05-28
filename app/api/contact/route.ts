import { Resend } from "resend";

export async function POST(request: Request) {
  const resend = new Resend(process.env.RESEND_API_KEY);

  const formData = await request.formData();

  const name = String(formData.get("name") || "");
  const email = String(formData.get("email") || "");
  const subject = String(formData.get("subject") || "Ny melding fra nettsiden");
  const message = String(formData.get("message") || "");

const { data, error } = await resend.emails.send({
  from: "Gjelsås Media <kontakt@gjelsaas.no>",
  to: "thomas@gjelsaas.no",
  replyTo: email,
  subject: `Kontaktskjema: ${subject}`,

  text: `
Navn: ${name}

E-post: ${email}

Melding:
${message}
`,

  html: `
    <h2>Ny melding fra kontaktskjema</h2>

    <p><strong>Navn:</strong> ${name}</p>

    <p><strong>E-post:</strong> ${email}</p>

    <p><strong>Melding:</strong></p>

    <p>${message}</p>
  `,
});

  return Response.redirect(new URL("/?sent=1#kontakt", request.url));
}