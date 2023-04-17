import { QueryClientProvider } from '@tanstack/react-query';
import { ReactNode } from 'react';

import { queryClient } from '@/lib/react-query';

export interface RootProviderProps {
  children: ReactNode;
}

export function RootProvider({ children }: RootProviderProps) {
  return <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>;
}
