export default function Hero() {
  return (
    <section className="bg-gray-100 dark:bg-slate-900 py-20 px-6 text-center">

      <h1 className="text-4xl md:text-6xl font-bold text-black dark:text-white">
        Homestay Review Analyzer
      </h1>

      <p className="mt-6 text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
        Understand guest experiences through reviews and feedback.
        Discover valuable insights and improve your homestay services.
      </p>

      <button className="mt-8 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition">
        Explore Reviews
      </button>

    </section>
  );
}