import { useQuery } from "@tanstack/react-query";
import { getCartApi } from "../services/cart";

export function useCart(token: string | null) {
  return useQuery({
    queryKey: ["cart"],
    queryFn: () => getCartApi(token),
    enabled: !!token,
  });
}
