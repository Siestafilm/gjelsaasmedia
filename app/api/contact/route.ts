export async function POST(request: Request) {
  const formData = await request.formData();

  console.log({
    name: formData.get("name"),
    email: formData.get("email"),
    subject: formData.get("subject"),
    message: formData.get("message"),
  });

  return Response.redirect(new URL("/?sent=1#kontakt", request.url));
}