import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-blue-600 text-white px-6 py-4 flex justify-between items-center flex-wrap">
      <h1 className="text-xl font-bold">
        Homestay Review Analyzer
      </h1>

      <div className="flex gap-4">
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/dashboard">Dashboard</Link>
        <Link href="/login">Login</Link>
      </div>

      <div className="text-2xl"></div>
    </nav>
  );
}