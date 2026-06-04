import type { ReactNode } from "react";

export interface FormProps {
  children: ReactNode;
  title: string;
  url: string;
  buttonTitle: string;
  linkTitle: string;
  linkText: string;
}

export interface FormInputProps {
  children?: ReactNode;
  type: string;
  placeholder: string;
  icon: ReactNode;
  mt: number;
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
