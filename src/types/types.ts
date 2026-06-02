import type { ReactNode } from "react";

export interface FormProps {
  children: ReactNode;
  title: string;
  url: string;
  buttonTitle: string;
  linkTitle: string;
  linkText: string;
}
