import { PopupProps } from "@/types/Popup";

export default function Popup({
  isOpen,
  close,
  onPressButton,
  title,
  content,
  titleButton,
}: PopupProps) {
  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded shadow-md w-96 relative">
            <h2 className="text-xl font-bold mb-4">{title}</h2>
            <p className="mb-4">{content}</p>
            <button
              onClick={close}
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-800"
            >
              ✖
            </button>
            <button
              onClick={onPressButton}
              className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
            >
              {titleButton}
            </button>
          </div>
        </div>
      )}
    </>
  );
}
