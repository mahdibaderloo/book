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

export interface FormInputProps {
  type: string;
  children?: ReactNode;
  placeholder: string;
  icon: ReactNode;
  mt: number;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export interface ButtonProps {
  title: string;
  width?: string;
  mt?: string;
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

export interface LoginUser {
  email: string;
  password: string;
}

export interface User {
  id: number;
  username: string;
  email: string;
  avatar?: string;
}
