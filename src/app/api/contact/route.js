import nodemailer from 'nodemailer';
import { NextResponse } from 'next/server';

export const runtime = 'nodejs';

const hits = new Map(); // simple in-memory rate limit: 5 requests / 10 min / IP
function limited(ip) {
  const now = Date.now();
  const list = (hits.get(ip) || []).filter((t) => now - t < 600000);
  list.push(now);
  hits.set(ip, list);
  return list.length > 5;
}

const esc = (s = '') => String(s).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));

export async function POST(request) {
  const ip = request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() || 'unknown';
  if (limited(ip)) return NextResponse.json({ ok: false, message: 'Too many requests. Please try again later.' }, { status: 429 });

  let body;
  try { body = await request.json(); } catch { return NextResponse.json({ ok: false, message: 'Invalid request.' }, { status: 400 }); }

  const { reason = 'General enquiry', name = '', email = '', phone = '', message = '', website = '' } = body;
  if (website) return NextResponse.json({ ok: true }); // honeypot
  if (!name.trim() || !/^\S+@\S+\.\S+$/.test(email) || message.trim().length < 5) {
    return NextResponse.json({ ok: false, message: 'Please fill in your name, a valid email and a message.' }, { status: 400 });
  }

  const { SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS, MAIL_TO } = process.env;
  if (!SMTP_HOST || !SMTP_USER || !SMTP_PASS) {
    console.warn('[contact] SMTP is not configured. Set SMTP_* variables in .env');
    return NextResponse.json({ ok: false, message: 'Email service is not configured yet.' }, { status: 503 });
  }

  try {
    const transporter = nodemailer.createTransport({
      host: SMTP_HOST,
      port: Number(SMTP_PORT) || 465,
      secure: (Number(SMTP_PORT) || 465) === 465,
      auth: { user: SMTP_USER, pass: SMTP_PASS },
    });
    await transporter.sendMail({
      from: `"TasmaFive Website" <${SMTP_USER}>`,
      to: MAIL_TO || SMTP_USER,
      replyTo: email,
      subject: `[Website] ${reason} from ${name}`,
      text: `Reason: ${reason}\nName: ${name}\nEmail: ${email}\nPhone: ${phone}\n\n${message}`,
      html: `<h3>${esc(reason)}</h3><p><b>Name:</b> ${esc(name)}<br><b>Email:</b> ${esc(email)}<br><b>Phone:</b> ${esc(phone)}</p><p>${esc(message).replace(/\n/g, '<br>')}</p>`,
    });
    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error('[contact] send failed', err);
    return NextResponse.json({ ok: false, message: 'Could not send email. Please use WhatsApp or call us.' }, { status: 502 });
  }
}
