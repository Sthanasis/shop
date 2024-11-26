import { useRouter, usePathname, useParams } from 'next/navigation';
import { MouseEvent, ReactNode } from 'react';
import Link from 'next/link';
interface AppLinkProps {
  children: ReactNode | JSX.Element | string;
  href: string;
  onTransitionEnd?: () => void;
}

export default function AppLink({
  children,
  href,
  onTransitionEnd,
}: AppLinkProps) {
  const router = useRouter();
  const params = useParams();
  let pathname = usePathname();
  const { lang } = params;
  if (lang)
    pathname =
      pathname === `/${lang}`
        ? pathname.replace(`${lang}`, '')
        : pathname.replace(`/${lang}`, '');

  const isActive = pathname === href;

  const handleClick = (e: MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    if (isActive) return;
    router.push(href);
  };

  return (
    <Link
      href={href}
      className={`p-4 transition-colors duration-100 cursor-pointer w-full sm:w-auto whitespace-nowrap ${
        isActive ? 'bg-slate-600 text-snow-white' : ''
      }`}
      onTransitionEnd={onTransitionEnd}
      onClick={handleClick}
      prefetch
    >
      {children}
    </Link>
  );
}
