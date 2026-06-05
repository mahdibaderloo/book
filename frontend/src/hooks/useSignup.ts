import { useMutation } from "@tanstack/react-query";
import { signup } from "../services/user";

export function useSignup() {
  return useMutation({
    mutationKey: ["signup"],
    mutationFn: signup,
  });
}
