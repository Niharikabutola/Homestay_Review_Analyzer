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
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      setResult("Positive sentiment detected 👍");
      setOpen(true);
      toast.success("Review analyzed");
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