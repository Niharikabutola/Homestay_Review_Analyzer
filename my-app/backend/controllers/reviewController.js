const reviews = require("../data/reviews");

// GET all reviews
const getAllReviews = (req, res) => {
  res.status(200).json(reviews);
};

// GET review by ID
const getReviewById = (req, res) => {
  const id = parseInt(req.params.id);
  const review = reviews.find((r) => r.id === id);

  if (!review) {
    return res.status(404).json({ message: "Review not found" });
  }

  res.status(200).json(review);
};

// POST new review
const createReview = (req, res) => {
  console.log("=== REQUEST RECEIVED ===");
  console.log("Headers:", req.headers);
  console.log("Body:", req.body);

  if (!req.body) {
    return res.status(400).json({
      message: "Request body is undefined"
    });
  }

  const { guest, homestay, rating, review, sentiment } = req.body;

  const newReview = {
    id: reviews.length + 1,
    guest,
    homestay,
    rating,
    review,
    sentiment,
  };

  reviews.push(newReview);

  res.status(201).json(newReview);
};
//put
const updateReview = (req, res) => {
  const id = parseInt(req.params.id);

  const review = reviews.find((r) => r.id === id);

  if (!review) {
    return res.status(404).json({
      message: "Review not found",
    });
  }

  const { guest, homestay, rating, review: reviewText, sentiment } = req.body;

  review.guest = guest;
  review.homestay = homestay;
  review.rating = rating;
  review.review = reviewText;
  review.sentiment = sentiment;

  res.status(200).json(review);
};
//delete
const deleteReview = (req, res) => {
  const id = parseInt(req.params.id);

  const index = reviews.findIndex((r) => r.id === id);

  if (index === -1) {
    return res.status(404).json({
      message: "Review not found",
    });
  }

  reviews.splice(index, 1);

  res.status(204).send();
};
//search controller
const searchReviews = (req, res) => {
  const query = req.query.q?.toLowerCase();

  if (!query) {
    return res.status(400).json({
      message: "Search query is required",
    });
  }

  const results = reviews.filter(
    (review) =>
      review.guest.toLowerCase().includes(query) ||
      review.homestay.toLowerCase().includes(query) ||
      review.review.toLowerCase().includes(query)
  );

  res.status(200).json(results);
};
module.exports = {
  getAllReviews,
  getReviewById,
  createReview,
  updateReview,
  deleteReview,
  searchReviews,

};