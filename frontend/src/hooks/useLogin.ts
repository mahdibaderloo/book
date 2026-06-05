import { useMutation } from "@tanstack/react-query";

export function useLogin() {
  return useMutation({
    mutationKey: ["login"],
    mutationFn: () => {},
  });
}
