import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-900 dark:bg-black text-white py-8 mt-10">

      <div className="flex justify-center gap-6 flex-wrap">

        <Link href="/">Home</Link>

        <Link href="/dashboard">Dashboard</Link>

        <Link href="/reviews">Reviews</Link>

        <Link href="/settings">Settings</Link>

      </div>

      <div className="text-center mt-5">

        <p>
          Facebook | Instagram | Twitter
        </p>

        <p className="text-gray-400 mt-3">
          © 2026 Homestay Review Analyzer
        </p>

      </div>

    </footer>
  );
}