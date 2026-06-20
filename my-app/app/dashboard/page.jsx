import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

export default function Dashboard() {
  return (
    <>
      <Navbar />

      <main className="p-8 min-h-screen">
        <h1 className="text-4xl font-bold">
          Dashboard
        </h1>

        <p className="mt-6 text-gray-600 text-lg">
          The dashboard provides a summary of guest reviews and customer
          feedback. It helps users quickly understand overall performance
          and make informed decisions for improving homestay experiences.
        </p>
      </main>

      <Footer />
    </>
  );
}