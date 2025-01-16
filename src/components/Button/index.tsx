import { ButtonHTMLAttributes, ReactNode } from "react";
import { ButtonAdd } from "./styles";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  label?: string;
  icon?: ReactNode;
}
export default function Button({ label, icon, ...props }: ButtonProps) {
  return <ButtonAdd {...props}>{icon ? icon : label}</ButtonAdd>;
}
