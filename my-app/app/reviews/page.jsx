import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

export default function Reviews() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen p-8 bg-white dark:bg-slate-900 dark:text-white">

        <h1 className="text-4xl font-bold mb-8">
          Guest Reviews
        </h1>

        <div className="space-y-6">

          <div className="border rounded-xl p-5 shadow">
            <h2 className="font-semibold">
              Excellent Experience
            </h2>

            <p className="text-gray-600 dark:text-gray-300 mt-2">
              The room was clean and the host was very welcoming.
            </p>
          </div>

          <div className="border rounded-xl p-5 shadow">
            <h2 className="font-semibold">
              Comfortable Stay
            </h2>

            <p className="text-gray-600 dark:text-gray-300 mt-2">
              Great location and friendly service.
            </p>
          </div>

        </div>

      </main>

      <Footer />
    </>
  );
}