"use client";

import { Bounce, toast } from "react-toastify";

interface showToastSuccessProps {
  label: string;
}

export default function showToastSuccess({ label }: showToastSuccessProps) {
  toast.success(label, {
    position: "top-center",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: false,
    draggable: true,
    progress: undefined,
    theme: "dark",
    transition: Bounce,
  });
}
