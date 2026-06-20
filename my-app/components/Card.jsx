export default function Card({
  title,
  description,
  image,
  action,
}) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <img
        src={image}
        alt={title}
        className="w-full h-56 object-cover"
      />

      <div className="p-5">
        <h2 className="text-2xl font-bold">
          {title}
        </h2>

        <p className="text-gray-600 mt-3">
          {description}
        </p>

        <button className="bg-green-600 text-white px-4 py-2 rounded mt-5">
          {action}
        </button>
      </div>
    </div>
  );
}