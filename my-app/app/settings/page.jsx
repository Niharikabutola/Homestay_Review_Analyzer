import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

export default function Settings() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen p-8 bg-white dark:bg-slate-900 dark:text-white">

        <h1 className="text-4xl font-bold mb-8">
          Settings
        </h1>

        <div className="space-y-5">

          <div className="border rounded-xl p-5">
            Profile Preferences
          </div>

          <div className="border rounded-xl p-5">
            Notification Settings
          </div>

          <div className="border rounded-xl p-5">
            Appearance Settings
          </div>

        </div>

      </main>

      <Footer />
    </>
  );
}