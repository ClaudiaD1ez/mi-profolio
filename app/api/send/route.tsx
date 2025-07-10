import { EmailTemplate } from "@/components/email-template";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const dataForm = await req.json();
    try {
      const data = await resend.emails.send({
        from: "Acme <onboarding@resend.dev>",
        to: ["claudia.diezsan@gmail.com"],
        subject: "Tarredev landing",
        react: (
        <EmailTemplate
            firstName={dataForm.username}
            message={dataForm.message}
            email={dataForm.email}
        />
        ),
        text: "Tarredev",
      });
      return Response.json(data);
    } catch (error) {
      return Response.json({ error });
    }
  } catch (error) {
    return Response.json({ error });
  }
}

