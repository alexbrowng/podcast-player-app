import { QueryClient, UseQueryOptions, DefaultOptions } from '@tanstack/react-query';

import { DAY } from '@/constants';

const defaultOptions: DefaultOptions = {
  queries: {
    refetchOnWindowFocus: false,
    retry: false,
    staleTime: Infinity,
    cacheTime: DAY,
  },
};

export const queryClient = new QueryClient({ defaultOptions });

export type ExtractFnReturnType<FnType extends (...args: any) => any> = Awaited<ReturnType<FnType>>;

export type QueryConfig<QueryFnType extends (...args: any) => any> = Omit<
  UseQueryOptions<ExtractFnReturnType<QueryFnType>>,
  'queryKey' | 'queryFn'
>;
