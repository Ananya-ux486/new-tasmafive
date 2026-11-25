import { readFile } from 'node:fs/promises';
import path from 'node:path';
import { NextResponse } from 'next/server';

const ALLOWED = new Set(['startup-india', 'iso-9001', 'gst', 'udyam']);

// Certificates live in /private/certs (not /public), so they are only served to signed-in visitors.
export async function GET(request, { params }) {
  const token = request.cookies.get('tf_auth')?.value;
  if (!token) return new NextResponse('Sign in required', { status: 401 });
  if (!ALLOWED.has(params.id)) return new NextResponse('Not found', { status: 404 });
  try {
    const file = await readFile(path.join(process.cwd(), 'private', 'certs', `${params.id}.jpg`));
    return new NextResponse(file, {
      headers: {
        'Content-Type': 'image/jpeg',
        'Content-Disposition': 'inline',
        'Cache-Control': 'private, no-store',
        'X-Robots-Tag': 'noindex',
      },
    });
  } catch {
    return new NextResponse('Not found', { status: 404 });
  }
}
