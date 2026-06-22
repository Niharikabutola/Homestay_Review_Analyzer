import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

export default function Login() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-gray-50 dark:bg-slate-900 flex items-center justify-center px-6">

        <div className="bg-white dark:bg-slate-800 shadow-lg rounded-xl p-8 w-full max-w-md">

          <h1 className="text-4xl font-bold text-center text-black dark:text-white">
            Login
          </h1>

          <p className="mt-4 text-center text-gray-600 dark:text-gray-300">
            Enter your credentials to access your account.
          </p>

          <div className="mt-8">

            <div className="mb-6">
              <label className="block mb-2 text-black dark:text-white">
                Username
              </label>

              <input
                type="text"
                placeholder="Enter username"
                className="w-full border border-gray-300 dark:border-slate-600 p-3 rounded-lg bg-white dark:bg-slate-700 text-black dark:text-white"
              />
            </div>

            <div className="mb-6">
              <label className="block mb-2 text-black dark:text-white">
                Password
              </label>

              <input
                type="password"
                placeholder="Enter password"
                className="w-full border border-gray-300 dark:border-slate-600 p-3 rounded-lg bg-white dark:bg-slate-700 text-black dark:text-white"
              />
            </div>

            <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg">
              Login
            </button>

          </div>

        </div>

      </main>

      <Footer />
    </>
  );
}