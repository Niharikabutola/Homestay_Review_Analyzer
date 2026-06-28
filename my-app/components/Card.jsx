import Link from "next/link";

export default function Card({
  title,
  description,
  image,
  action,
  href,
}) {
  return (
    <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-lg overflow-hidden transition hover:shadow-xl">

      <img
        src={image}
        alt={title}
        className="w-full h-72 object-cover"
      />

      <div className="p-6">

        <h2 className="text-3xl font-bold text-black dark:text-white">
          {title}
        </h2>

        <p className="mt-4 text-gray-600 dark:text-gray-300 leading-7">
          {description}
        </p>

        <Link href={href}>
          <button className="mt-6 bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg">
            {action}
          </button>
        </Link>

      </div>

    </div>
  );
}