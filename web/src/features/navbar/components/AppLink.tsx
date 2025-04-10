import { JSX, ReactNode } from 'react';
import Link from 'next/link';
interface AppLinkProps {
  children: ReactNode | JSX.Element | string;
  href: string;
  isActive: boolean;
}

export default function AppLink({ children, href, isActive }: AppLinkProps) {
  return (
    <Link
      href={href}
      className={`p-4 transition-colors duration-100 cursor-pointer w-full sm:w-auto whitespace-nowrap ${
        isActive ? 'bg-slate-600 text-snow-white' : ''
      }`}
      prefetch
    >
      {children}
    </Link>
  );
}
