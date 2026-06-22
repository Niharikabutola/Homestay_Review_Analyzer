/**
 * Modal Component
 * Props:
 * - open
 * - title
 * - children
 * - onClose
 */

export default function Modal({
  open,
  title,
  children,
  onClose,
}) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-50">
      <div className="bg-white rounded-xl shadow-lg p-6 w-[90%] max-w-md">

        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold">
            {title}
          </h2>

          <button
            onClick={onClose}
            className="text-gray-500 hover:text-red-600 text-xl"
          >
            ✕
          </button>
        </div>

        <div>{children}</div>

      </div>
    </div>
  );
}