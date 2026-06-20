import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

export default function Login() {
  return (
    <>
      <Navbar />

      <main className="flex items-center justify-center min-h-screen px-4">
        <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md">

          <h1 className="text-3xl font-bold text-center mb-6">
            Login
          </h1>

          <input
            type="text"
            placeholder="Username"
            className="w-full border rounded p-3 mb-4"
          />

          <input
            type="password"
            placeholder="Password"
            className="w-full border rounded p-3 mb-4"
          />

          <button className="w-full bg-blue-600 text-white py-3 rounded">
            Sign In
          </button>

          <p className="text-center text-gray-600 mt-4">
            Access your Homestay Review Analyzer account.
          </p>

        </div>
      </main>

      <Footer />
    </>
  );
}