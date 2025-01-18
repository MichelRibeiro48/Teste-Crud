import { Bounce, toast } from "react-toastify";

interface showToastErrorProps {
  label: string;
}

export default function showToastError({ label }: showToastErrorProps) {
  toast.error(label, {
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
