import { notFound } from 'next/navigation';

export async function appFetch<T>(
  input: string | URL | globalThis.Request,
  init?: RequestInit
): Promise<T> {
  const response = await fetch(input, init);
  const json = await response.json();
  if (response.ok) return json.data;
  if (json.error.status === 404) return notFound();
  throw new Error(json.error.message);
}
