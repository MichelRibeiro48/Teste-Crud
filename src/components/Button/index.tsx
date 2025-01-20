import { ButtonHTMLAttributes, ReactNode } from "react";
import { ButtonAdd } from "./styles";
import { ButtonProps } from "@/types/button";

export default function Button({ label, icon, ...props }: ButtonProps) {
  return <ButtonAdd {...props}>{icon ? icon : label}</ButtonAdd>;
}
