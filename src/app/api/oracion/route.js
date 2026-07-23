import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request) {
  const { nombre, correo, peticion } = await request.json();

  try {
    await resend.emails.send({
      from: "Iglesia IBE <onboarding@resend.dev>",
      to: "luisalonsogo95@gmail.com",
      subject: `Nueva petición de oración - ${nombre}`,
      html: `
        <h2>Nueva petición de oración</h2>
        <p><strong>Nombre:</strong> ${nombre}</p>
        <p><strong>Correo:</strong> ${correo || "No proporcionado"}</p>
        <p><strong>Petición:</strong> ${peticion}</p>
      `,
    });

    return Response.json({ ok: true });
  } catch (error) {
    return Response.json({ ok: false, error: error.message }, { status: 500 });
  }
}