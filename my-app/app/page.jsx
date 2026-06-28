import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Card from "../components/Card";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />

      <Hero />

      <section className="bg-gray-50 dark:bg-slate-900 p-8 min-h-screen">

        <div className="grid md:grid-cols-2 gap-8">

       <Card
  title="Guest Reviews"
  description="Read and understand feedback shared by guests about their stay."
  image="https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1000"
  action="Read Reviews"
  href="/reviews"
/>

<Card
  title="Customer Feedback"
  description="View customer opinions and discover insights from guest experiences."
  image="https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=1000"
  action="Explore Feedback"
  href="/dashboard"
/>

        </div>

      </section>

      <Footer />
    </>
  );
}