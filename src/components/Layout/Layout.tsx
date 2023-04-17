import { ReactNode } from 'react';

import { Navbar } from '@/components/Navbar';

export interface LayoutProps {
  children: ReactNode;
}

export function Layout({ children }: LayoutProps) {
  return (
    <main className="relative flex h-full w-full flex-col">
      <div className="relative flex w-full shrink-0">
        <Navbar />
      </div>

      <div className="relative flex h-full w-full grow flex-col items-center overflow-auto">{children}</div>
    </main>
  );
}
