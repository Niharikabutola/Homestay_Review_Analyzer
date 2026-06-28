"use client";

import { useEffect, useState } from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Loader from "../../components/ui/Loader";
import toast from "react-hot-toast";

export default function Reviews() {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:5000/api/reviews")
      .then((res) => {
        if (!res.ok) {
          throw new Error("Failed to fetch reviews");
        }
        return res.json();
      })
      .then((data) => {
        setReviews(data);
        setLoading(false);
      })
      .catch(() => {
        toast.error("Failed to load reviews");
        setLoading(false);
      });
  }, []);

  return (
    <>
      <Navbar />

      <main className="min-h-screen p-8 bg-white dark:bg-slate-900 dark:text-white">

        <h1 className="text-4xl font-bold mb-8">
          Guest Reviews
        </h1>

        {loading ? (
          <Loader />
        ) : (
          <div className="space-y-6">
            {reviews.map((review) => (
              <div
                key={review.id}
                className="border rounded-xl p-5 shadow bg-white dark:bg-slate-800"
              >
                <h2 className="text-xl font-semibold">
                  {review.guest}
                </h2>

                <p className="mt-2">
                  <strong>Homestay:</strong> {review.homestay}
                </p>

                <p>
                  <strong>Rating:</strong> ⭐ {review.rating}
                </p>

                <p className="text-gray-600 dark:text-gray-300 mt-2">
                  {review.review}
                </p>

                <p className="mt-2">
                  <strong>Sentiment:</strong> {review.sentiment}
                </p>
              </div>
            ))}
          </div>
        )}

      </main>

      <Footer />
    </>
  );
}