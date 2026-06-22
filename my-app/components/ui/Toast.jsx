/**
 * Toast Component
 * Props:
 * - message
 * - type: success | error | warning | info
 */

export default function Toast({
  message,
  type = "success",
}) {
  const styles = {
    success: "bg-green-600 text-white",
    error: "bg-red-600 text-white",
    warning: "bg-yellow-500 text-black",
    info: "bg-blue-600 text-white",
  };

  if (!message) return null;

  return (
    <div
      className={`fixed top-5 right-5 px-5 py-3 rounded-lg shadow-lg z-50 ${styles[type]}`}
    >
      {message}
    </div>
  );
}