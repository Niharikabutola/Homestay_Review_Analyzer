"use client";

import { useState } from "react";

import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

import Button from "../../components/ui/Button";
import Modal from "../../components/ui/Modal";
import Loader from "../../components/ui/Loader";

import toast from "react-hot-toast";

export default function AIFeature() {
  const [text, setText] = useState("");
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState("");
const analyzeReview = () => {

  if (!text.trim()) {
    toast.error("Please enter a review");
    return;
  }

  setLoading(true);

  setTimeout(() => {

    const review = text.toLowerCase();

    let sentiment = "";
    let recommendation = "";

    if (
      review.includes("excellent") ||
      review.includes("great") ||
      review.includes("amazing") ||
      review.includes("good") ||
      review.includes("clean") ||
      review.includes("friendly") ||
      review.includes("comfortable")
    ) {

      sentiment = "😊 Positive";
      recommendation =
        "Guests are satisfied. Maintain the same quality of service.";

    } else if (
      review.includes("bad") ||
      review.includes("dirty") ||
      review.includes("poor") ||
      review.includes("worst") ||
      review.includes("late") ||
      review.includes("rude") ||
      review.includes("noisy") ||
      review.includes("uncomfortable")
    ) {

      sentiment = "😞 Negative";
      recommendation =
        "Guest experience needs improvement. Review cleanliness and customer service.";

    } else {

      sentiment = "😐 Neutral";
      recommendation =
        "The review is neutral. Collect more detailed feedback.";
    }

    setResult(
`Review Analysis

Sentiment: ${sentiment}

Recommendation:
${recommendation}`
    );

    setOpen(true);

    toast.success("Review analyzed successfully");

    setLoading(false);

  }, 1500);

};

  return (
    <>
      <Navbar />

      <main className="min-h-screen p-8 bg-white dark:bg-slate-900 text-black dark:text-white">

        <h1 className="text-3xl font-bold mb-6">
          AI Review Analyzer
        </h1>

        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Paste a guest review..."
          className="w-full h-40 p-4 rounded-lg border
          bg-white dark:bg-slate-800
          text-black dark:text-white
          border-gray-300 dark:border-slate-600"
        />

        <div className="mt-4">
          <Button onClick={analyzeReview}>
            Analyze Review
          </Button>
        </div>

        {loading && <Loader />}

        <Modal
          open={open}
          title="AI Insights"
          onClose={() => setOpen(false)}
        >
          <p>{result}</p>
        </Modal>

      </main>

      <Footer />
    </>
  );
}