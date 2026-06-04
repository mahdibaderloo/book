import { useQuery } from "@tanstack/react-query";
import { getBook } from "../services/books";

export function useBook(id: number) {
  return useQuery({
    queryKey: ["book", id],
    queryFn: () => getBook(id),
    enabled: !!id,
  });
}
