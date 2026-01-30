// app/api/contact/route.ts
import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const {
      firstName,
      lastName,
      email,
      phone,
      subject,        //  <--  SUBJECT!
      message,
      gdprConsent,    //  <--  DSGVO-Checkbox!
    } = await req.json();

    if (!gdprConsent) {
      return NextResponse.json(
        { ok: false, error: 'CONSENT_REQUIRED' },
        { status: 400 },
      );
    }

    await resend.emails.send({
      from: 'Fiibi Kontakt <onboarding@resend.dev>',   // funktioniert ohne Domain-Verifizierung
      to: 'igor.sigatinski@outlook.de',
      subject: `Neue Kontaktanfrage – ${subject}`,
      html: `
        <h2>Neue Nachricht</h2>
        <p><strong>Name:</strong> ${firstName} ${lastName}</p>
        <p><strong>E-Mail:</strong> ${email}</p>
        ${phone ? `<p><strong>Telefon:</strong> ${phone}</p>` : ''}
        <p><strong>Thema:</strong> ${subject}</p>
        <p><strong>Nachricht:</strong><br>${message.replace(/\n/g, '<br>')}</p>
      `,
    });

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error(err);
    return NextResponse.json(
      { ok: false, error: 'SERVER_ERROR' },
      { status: 500 },
    );
  }
}
