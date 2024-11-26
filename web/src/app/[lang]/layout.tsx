import type { Metadata } from 'next';
import localFont from 'next/font/local';
import Navbar from '@/features/navbar/components/Navbar';
import '../globals.css';
import { getDictionary } from '@/shared/utilities/getDictionaries';
import { AppLocale } from '@/shared/types/appLocale';
import { createRouteConfig } from '@/features/navbar/utilities/createRouteConfig';

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
  return [{ lang: 'en-US' }, { lang: 'el-GR' }];
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
  const routeConfig = createRouteConfig({
    home: dict.nav.home,
    about: dict.nav.about,
    products: dict.nav.products,
  });
  return (
    <html lang={lang}>
      <body
        className={`${geistSans.variable} ${geistMono.variable} overflow-auto w-screen pt-16 h-screen  antialiased font-[family-name:var(--font-geist-sans)]`}
      >
        <header className="w-full fixed z-10 top-0">
          <Navbar title={dict.app.title} routeConfig={routeConfig} />
        </header>
        <main className="flex flex-wrap p-4 gap-8">{children}</main>
      </body>
    </html>
  );
}
