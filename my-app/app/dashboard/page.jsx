import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

export default function Dashboard() {
  return (
    <>
      <Navbar />

      <main className="p-8 min-h-screen bg-white dark:bg-gray-900 transition-colors">
        <h1 className="text-4xl font-bold text-black dark:text-white">
          Dashboard
        </h1>

        <p className="text-gray-600 dark:text-gray-300 leading-7 mt-4">
          The dashboard provides a summary of guest reviews and customer
          feedback. It helps users quickly understand overall performance
          and make informed decisions for improving homestay experiences.
        </p>

        <p className="text-gray-600 dark:text-gray-300 leading-7 mt-4">
          Welcome to your Homestay Review Analyzer dashboard. This page
          provides a centralized view of customer feedback collected from
          various homestays. Users can monitor review statistics, identify
          positive and negative sentiments, and gain valuable insights into
          customer experiences through interactive charts and summary cards.
        </p>
      </main>

      <Footer />
    </>
  );
}