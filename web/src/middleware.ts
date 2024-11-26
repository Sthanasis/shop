/* eslint-disable boundaries/no-unknown-files */
import { NextResponse, NextRequest } from 'next/server';
import { appLocales } from '@/shared/constants/appLocales';
import { match } from '@formatjs/intl-localematcher';
import Negotiator from 'negotiator';

// Get the preferred locale, similar to the above or using a library
function getLocale(request: NextRequest) {
  const headers = {
    'accept-language':
      request.headers.get('accept-language') || 'en-US,en;q=0.5',
  };
  const languages = new Negotiator({ headers }).languages();
  const defaultLocale = 'el';

  return match(languages, appLocales, defaultLocale);
}

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  if (
    /\.(ico|png|jpg|jpeg|svg|woff|woff2|ttf|eot|mp4|webm|mp3|wav|m4a|aac|oga)$/i.test(
      pathname
    )
  )
    return NextResponse.next();
  const pathnameHasLocale = appLocales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );

  if (pathnameHasLocale) return;

  // Redirect if there is no locale
  const locale = getLocale(request);
  request.nextUrl.pathname = `/${locale}${pathname}`;
  // e.g. incoming request is /products
  // The new URL is now /en-US/products
  return NextResponse.redirect(request.nextUrl);
}

export const config = {
  matcher: [
    // Skip all internal paths (_next)
    '/((?!_next).*)',
    // Optional: only run on root (/) URL
    // '/'
  ],
};
