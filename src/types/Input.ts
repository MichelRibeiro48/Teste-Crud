import { ChangeEvent } from "react";

export interface InputProps {
    value: string;
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
    showLabel?: boolean;
    label?: string;
    id?: string;
  }