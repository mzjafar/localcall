import './globals.css';
import { ReactNode } from 'react';

export const metadata = {
  title: 'LocalCall.in',
  description: 'Help. Fast. Nearby. — Service at Doorstep.',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-gradient-to-b from-blue-50 to-white text-slate-800">
        {children}
      </body>
    </html>
  );
}

