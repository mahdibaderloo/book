import { BASE_URL } from "../config/api";
import type { LoginUser, SignupUser } from "../types/types";

export async function login(user: LoginUser) {
  const response = await fetch(`${BASE_URL}/auth/login`, {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(user),
  });

  if (!response.ok) {
    throw new Error("Login Failed");
  }

  return response.json();
}

export async function signup(user: SignupUser) {
  const response = await fetch(`${BASE_URL}/auth/register`, {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(user),
  });

  if (!response.ok) {
    throw new Error("Signup Failed");
  }

  return response.json();
}
