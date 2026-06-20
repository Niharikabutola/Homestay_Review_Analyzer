import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-6 text-center mt-10">
      <div className="flex justify-center gap-4 mb-4">
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/dashboard">Dashboard</Link>
        <Link href="/login">Login</Link>
      </div>

      <div className="mb-3">
        Facebook | Instagram | Twitter
      </div>

      <p>
        © 2026 Homestay Review Analyzer
      </p>
    </footer>
  );
}