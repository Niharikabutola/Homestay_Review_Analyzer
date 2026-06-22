import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

export default function AIFeature() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen p-8 bg-white dark:bg-slate-900 dark:text-white">

        <h1 className="text-4xl font-bold mb-8">
          AI Review Analyzer
        </h1>

        <textarea
          placeholder="Paste a guest review..."
          className="border rounded-lg p-4 w-full h-40"
        />

        <button className="bg-blue-600 text-white px-6 py-3 rounded-lg mt-6">
          Analyze Review
        </button>

        <div className="border rounded-xl p-6 mt-8">
          AI insights will appear here.
        </div>

      </main>

      <Footer />
    </>
  );
}