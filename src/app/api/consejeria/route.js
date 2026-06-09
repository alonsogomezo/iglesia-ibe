import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request) {
  const { nombre, correo, telefono, mensaje } = await request.json();

  try {
    await resend.emails.send({
      from: "Iglesia IBE <onboarding@resend.dev>",
      to: "luisalonsogo95@gmail.com",
      subject: `Nueva solicitud de consejería - ${nombre}`,
      html: `
        <h2>Nueva solicitud de consejería</h2>
        <p><strong>Nombre:</strong> ${nombre}</p>
        <p><strong>Correo:</strong> ${correo}</p>
        <p><strong>Teléfono:</strong> ${telefono}</p>
        <p><strong>Mensaje:</strong> ${mensaje}</p>
      `,
    });

    return Response.json({ ok: true });
  } catch (error) {
    return Response.json({ ok: false, error: error.message }, { status: 500 });
  }
}