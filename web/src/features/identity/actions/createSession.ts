import 'server-only';
import { cookies } from 'next/headers';

const Days = 2;
const Hours = 24;
const Minutes = 60;
const Seconds = 60;
const Milliseconds = 1000;

export async function createSession(token: string) {
  const expiresAt = new Date(
    Date.now() + Days * Hours * Minutes * Seconds * Milliseconds
  );
  const appCookies = await cookies();
  appCookies.set('session', token, {
    httpOnly: true,
    secure: true,
    expires: expiresAt,
    sameSite: 'lax',
    path: '/',
  });
}
