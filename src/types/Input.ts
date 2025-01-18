import { ChangeEvent } from "react";

export interface InputProps {
    value?: string;
    onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
    required?: boolean;
    showLabel?: boolean;
    label?: string;
    id?: string;
    type?: string;
  }