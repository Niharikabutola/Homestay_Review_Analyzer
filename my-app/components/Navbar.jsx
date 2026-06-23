import Link from "next/link";
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  return (
    <nav className="bg-blue-600 dark:bg-slate-800 text-white px-6 py-4 flex justify-between items-center flex-wrap">

      <h1 className="font-bold text-xl">
        Homestay Review Analyzer
      </h1>

      <div className="flex gap-5 items-center flex-wrap">

        <Link href="/">Home</Link>

        <Link href="/dashboard">Dashboard</Link>

        <Link href="/reviews">Reviews</Link>

        <Link href="/ai-feature">AI Feature</Link>

  
        <Link href="/login">Login</Link>

        <ThemeToggle />

        <div className="text-2xl">
          👤
        </div>

      </div>
    </nav>
  );
}