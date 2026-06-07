import { useQuery } from "@tanstack/react-query";
import { getBooksWithQuery } from "../services/books";

export function useBooks(query: string) {
  return useQuery({
    queryKey: ["books", query],
    queryFn: () => getBooksWithQuery(query),
    enabled: true,
  });
}
