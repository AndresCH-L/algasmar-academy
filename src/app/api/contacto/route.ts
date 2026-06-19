import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const {
      nombre,
      correo,
      asunto,
      consulta,
    } = await req.json();

    const data = await resend.emails.send({
      from: "AlgasMar Academy <onboarding@resend.dev>",

      to: ["andresxd.2018@gmail.com"],

      subject: `Nueva consulta: ${asunto}`,

      html: `
        <div style="font-family: Arial, sans-serif;">
          <h2>Nueva Consulta desde AlgasMar Academy</h2>

          <p><strong>Nombre:</strong> ${nombre}</p>

          <p><strong>Correo:</strong> ${correo}</p>

          <p><strong>Asunto:</strong> ${asunto}</p>

          <hr>

          <p>${consulta}</p>
        </div>
      `,
    });

    return Response.json({
      success: true,
      data,
    });
  } catch (error) {
    console.error(error);

    return Response.json(
      {
        success: false,
        message: "Error al enviar consulta",
      },
      {
        status: 500,
      }
    );
  }
}