import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request) {
  const { nombre, correo, telefono } = await request.json();

  try {
    await resend.emails.send({
      from: "Iglesia IBE <onboarding@resend.dev>",
      to: "luisalonsogo95@gmail.com",
      subject: `Nueva visita registrada - ${nombre}`,
      html: `
        <h2>Nueva visita registrada</h2>
        <p><strong>Nombre:</strong> ${nombre}</p>
        <p><strong>Correo:</strong> ${correo}</p>
        <p><strong>Teléfono:</strong> ${telefono}</p>
      `,
    });

    return Response.json({ ok: true });
  } catch (error) {
    return Response.json({ ok: false, error: error.message }, { status: 500 });
  }
}