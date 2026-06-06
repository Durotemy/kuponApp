import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { fetchProduct, createProduct, Product } from '../api/productApi';

export const useProduct = () => {
  return useQuery({
    queryKey: ['product'],
    queryFn: () => fetchProduct(),
  });
};

export const useCreateProduct = () => {
  const queryClient = useQueryClient();

  return useMutation({
    // @ts-ignore
    mutationFn: (data: Product) => createProduct(),
    onSuccess: () => {
      // refetch the product list so it includes the new one
      queryClient.invalidateQueries({ queryKey: ['product'] });
    },
  });
};
