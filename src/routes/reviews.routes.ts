import { Router } from "express";
import {
  registerReview,
  getReviews,
  getReviewById,
  putReview,
  deleteReviewById,
} from "../controllers/review.controller";
import { reviewValidator } from "../middlewares/validators/validators";
import { verifyToken } from "../middlewares/validators/verifyToken";

const reviewRoutes = Router();

reviewRoutes.post("/new", verifyToken, reviewValidator, registerReview);

reviewRoutes.get("/", getReviews);

reviewRoutes.get("/:id", getReviewById);

reviewRoutes.put("/editreview/:id", putReview);

reviewRoutes.delete("/:id", deleteReviewById);

export default reviewRoutes;
