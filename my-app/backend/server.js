const express = require("express");
const cors = require("cors");
const errorHandler = require("./middleware/errorMiddleware");

const reviewRoutes = require("./routes/reviewRoutes");

const app = express();
app.use(errorHandler);
  
app.use(cors());
app.use(express.json());   // <-- This is REQUIRED

app.use("/api/reviews", reviewRoutes);

app.listen(5000, () => {
  console.log("Server running on port 5000");
});