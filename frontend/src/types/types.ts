import type React from "react";
import type { FormEvent, ReactNode } from "react";

export interface FormProps {
  children: ReactNode;
  title: string;
  url: string;
  buttonTitle: string;
  linkTitle: string;
  linkText: string;
  onSubmit: (e: FormEvent<HTMLFormElement>) => void;
}

export interface ButtonProps {
  title: string;
  width?: string;
  mt?: string;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

export interface Book {
  id: number;
  title: string;
  description: string;
  author: string;
  publisher: string;
  imageUrl: string;
  price: number;
}

export interface CartItems extends Book {
  quantity: number;
}

export interface CartItemResponse {
  productId: number;
  productTitle: string;
  price: number;
  imageUrl: string;
  quantity: number;
}

export interface User {
  id: number;
  username: string;
  email: string;
  avatar?: string;
}

export interface LoginUser {
  email: string;
  password: string;
}

export interface SignupUser {
  email: string;
  username: string;
  password: string;
}

export interface AuthResponse {
  user: User;
  token: string;
}
export interface UserState {
  user: User | null;
  token: string | null;
  isLogin: boolean;
}
