import { cookies } from 'next/headers';

export async function appFetch<T>(
  input: string | URL | globalThis.Request,
  init?: RequestInit
): Promise<T> {
  const headers = new Headers();
  const session = (await cookies()).get('session');
  if (session) headers.append('Cookie', session.value);
  const response = await fetch(input, {
    ...init,
    headers,
  });
  const json = await response.json();
  if (response.ok) return json.data;
  throw new Error(json.error.message);
}
