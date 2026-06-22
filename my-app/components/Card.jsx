/**
 * Card Component
 * Props:
 * title
 * description
 * image
 * action
 */

export default function Card({
  title,
  description,
  image,
  action,
}) {
  return (
    <div className="bg-white dark:bg-slate-800 rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition">

      <img
        src={image}
        alt={title}
        className="w-full h-56 object-cover"
      />

      <div className="p-6">

        <h2 className="text-2xl font-bold text-black dark:text-white">
          {title}
        </h2>

        <p className="mt-3 text-gray-600 dark:text-gray-300">
          {description}
        </p>

        <button className="mt-5 bg-green-600 hover:bg-green-700 text-white px-5 py-2 rounded-lg transition">
          {action}
        </button>

      </div>

    </div>
  );
}