import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Card from "../components/Card";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />

      <Hero />

      <section className="p-8">
        <div className="grid md:grid-cols-2 gap-8">

          <Card
            title="Guest Reviews"
            description="Read and understand feedback shared by guests about their stay and discover what visitors appreciate the most."
            image="https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1000"
            action="Read Reviews"
          />

          <Card
            title="Customer Feedback"
            description="Identify positive and negative opinions to improve the homestay experience and provide better services."
            image="https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=1000"
            action="Explore Feedback"
          />

        </div>
      </section>

      <Footer />
    </>
  );
}