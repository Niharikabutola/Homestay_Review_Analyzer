import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

export default function About() {
  return (
    <>
      <Navbar />

      <main className="p-8 min-h-screen">
        <h1 className="text-4xl font-bold">
          About Homestay Review Analyzer
        </h1>

        <p className="mt-6 text-gray-600 text-lg">
          Homestay Review Analyzer is designed to help users understand
          guest experiences through reviews and feedback. The platform
          makes it easier to identify strengths and areas for improvement,
          helping hosts provide better accommodation services.
        </p>
      </main>

      <Footer />
    </>
  );
}