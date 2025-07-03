import { useQuery } from '@tanstack/react-query';
import { getAllRates } from 'api/endpoints';

export const useGetRates = () =>
  useQuery({
    queryKey: ['rates'],
    queryFn: getAllRates,
    retry: false,
  });
