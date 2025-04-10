import type { Metadata } from 'next';
import localFont from 'next/font/local';
import '../globals.css';
import Navbar from '@/features/navbar/components/Navbar';
import { AppLocale } from '@/shared/types/appLocale';
import { getDictionary } from '@/shared/utilities/getDictionaries';

const geistSans = localFont({
  src: '../fonts/GeistVF.woff',
  variable: '--font-geist-sans',
  weight: '100 900',
});
const geistMono = localFont({
  src: '../fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono',
  weight: '100 900',
});

export const metadata: Metadata = {
  title: 'Online Shop',
  description: 'An online shop',
};

export async function generateStaticParams() {
  return [{ lang: 'en-US' }, { lang: 'el' }];
}

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ lang: AppLocale }>;
}>) {
  const { lang } = await params;
  const dict = await getDictionary(lang);
  return (
    <html lang={lang}>
      <body
        className={`${geistSans.variable} ${geistMono.variable} overflow-auto w-screen pt-16 h-screen  antialiased font-[family-name:var(--font-geist-sans)]`}
      >
        <header className="w-full fixed z-10 top-0">
          <Navbar
            title="Shop"
            routeConfig={[
              { name: dict.nav.home, href: '/' },
              { name: dict.nav.about, href: '/about' },
              { name: dict.nav.products, href: '/products' },
            ]}
            extraRouteConfig={[
              { name: dict.nav.signIn, href: '/signIn' },
              { name: dict.nav.signUp, href: '/signUp' },
            ]}
          />
        </header>
        <main className="flex flex-wrap p-4 gap-8">{children}</main>
      </body>
    </html>
  );
}
