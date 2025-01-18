import { showToastProps } from "@/types/toast";
import { Bounce, toast } from "react-toastify";

export default function showToastError({ label }: showToastProps) {
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
