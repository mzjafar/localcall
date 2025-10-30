'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Header() {
  const pathname = usePathname();

  const linkClass = (path: string) =>
    pathname === path
      ? 'text-blue-600 font-semibold border-b-2 border-blue-600'
      : 'text-slate-700 hover:text-blue-600';

  return (
    <header className="fixed top-0 left-0 w-full backdrop-blur-md bg-white/80 border-b border-white/50 z-50">
      <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
        <Link href="/">
          <span className="text-xl font-bold text-blue-700">LocalCall.in</span>
        </Link>
        <nav className="flex gap-6 text-sm">
          <Link href="/add-service" className={linkClass('/add-service')}>
            Add Service
          </Link>
          <Link href="/services" className={linkClass('/services')}>
            Services
          </Link>
          <Link href="/admin" className={linkClass('/admin')}>
            Admin
          </Link>
        </nav>
      </div>
    </header>
  );
}
