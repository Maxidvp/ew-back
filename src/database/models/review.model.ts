import mongoose from "mongoose";
import { IReview } from "../../interfaces/review.interface";

export interface IReviewDocument extends IReview, mongoose.Document {}

const reviewSchema = new mongoose.Schema<IReviewDocument>(
  {
    username: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    rate: {
      type: Number,

      default: 0,
    },
    description: {
      type: String,
    },
  },
  { timestamps: true }
);

export const ReviewModel = mongoose.model<IReviewDocument>(
  "Review",
  reviewSchema
);
