import { Request, Response } from "express";
import {
  createReview,
  findAll,
  findById,
  updateReview,
  deleteById,
} from "../services/review.service";

export const registerReview = async (req: Request, res: Response) => {
  try {
    const { username, description, rate } = req.body;

    const newReview = { username, description, rate };

    const review = await createReview(newReview);

    return res.send({ message: "Review created successfully", review });
  } catch (err: any) {
    return res.status(409).send("Error at register" + err);
  }
};

//find all reviews in DB
export const getReviews = async (req: Request, res: Response) => {
  try {
    const reviews = await findAll();

    return res.send(reviews);
  } catch (err: any) {
    return res.status(409).send(err);
  }
};

//find one review by ID
export const getReviewById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    const review = await findById(id);
    if (!review) return res.status(404).send("Review not found");

    return res.send(review);
  } catch (err: any) {
    return res.status(409).send(err);
  }
};

// update review
export const putReview = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { username, rate, description } = req.body;
  const newEdit = {
    username: username.id,
    rate,
    description,
  };
  try {
    const reviewId = await updateReview(id, newEdit);
    return res.send(reviewId);
  } catch (err: any) {
    return res.status(404).send("Review not actualized");
  }
};

//delete one review by ID
export const deleteReviewById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    const review = await deleteById(id);
    if (!review) return res.status(404).send("Review not found");

    return res.send({ message: "Review deleted successfully", review });
  } catch (err: any) {
    return res.status(409).send(err);
  }
};
