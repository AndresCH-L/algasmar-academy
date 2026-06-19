import { Resend } from "resend";

export async function POST(req: Request) {
  try {
    if (!process.env.RESEND_API_KEY) {
      return Response.json(
        {
          success: false,
          message: "RESEND_API_KEY no configurada",
        },
        {
          status: 500,
        }
      );
    }

    const resend = new Resend(
      process.env.RESEND_API_KEY
    );

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
        <div style="font-family: Arial, sans-serif; padding:20px;">
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