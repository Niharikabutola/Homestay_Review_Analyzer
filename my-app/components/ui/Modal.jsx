import { useEffect } from "react";

export default function Modal({
  open,
  title,
  children,
  onClose,
}) {
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") onClose();
    };

    document.addEventListener("keydown", handleEsc);
    return () => document.removeEventListener("keydown", handleEsc);
  }, [onClose]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-50">
      <div className="bg-white dark:bg-slate-800 rounded-xl shadow-lg p-6 w-[90%] max-w-md">

        <div className="flex justify-between mb-4">
          <h2 className="text-xl font-bold dark:text-white">
            {title}
          </h2>

          <button
            onClick={onClose}
            className="text-gray-500 hover:text-red-600"
          >
            ✕
          </button>
        </div>

        <div className="text-black dark:text-white">
          {children}
        </div>

      </div>
    </div>
  );
}