import { NextResponse } from 'next/server';
import { Resend } from 'resend';

export const runtime = 'nodejs';

type Payload = {
  name: string;
  email: string;
  topic: string;
  subject: string;
  message: string;
  company?: string; // honeypot
};

export async function POST(req: Request) {
  try {
    const data = (await req.json()) as Payload;

    if (data.company) return NextResponse.json({ ok: true });

    const { name, email, topic, subject, message } = data;

    if (!name || !email || !topic || !subject || !message) {
      return NextResponse.json({ ok: false, error: 'Campos obrigatórios.' }, { status: 400 });
    }

    const resend = new Resend(process.env.RESEND_API_KEY);

    const { data: sent, error } = await resend.emails.send({
      from: process.env.CONTACT_FROM_EMAIL!,
      to: [process.env.CONTACT_TO_EMAIL!],
      replyTo: email,
      subject: `[Contato] ${subject}`,
      text: [`Nome: ${name}`, `E-mail: ${email}`, `Área: ${topic}`, '', message].join('\n'),
    });

    if (error) {
      console.error('RESEND ERROR:', error);
      return NextResponse.json({ ok: false, error: error.message }, { status: 400 });
    }

    console.log('RESEND SENT:', sent);
    return NextResponse.json({ ok: true, id: sent?.id });
  } catch (err) {
    console.error('CONTACT API ERROR:', err);
    return NextResponse.json({ ok: false, error: 'Falha ao enviar.' }, { status: 500 });
  }
}
