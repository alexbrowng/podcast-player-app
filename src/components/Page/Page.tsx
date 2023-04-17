import { ReactNode } from 'react';

export interface PageProps {
  children: ReactNode;
}

export function Page({ children }: PageProps) {
  return <div className="container flex flex-col space-y-12 py-6">{children}</div>;
}
