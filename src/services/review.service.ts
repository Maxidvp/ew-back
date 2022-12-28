import { ReviewModel } from "../database/models/review.model";

// Function pair a review in the user db
export const createReview = async (input: {}) => {
  try {
    const userReview = await ReviewModel.create(input);

    return userReview;
  } catch (err: any) {
    throw new Error(err);
  }
};

export const findAll = async () => {
  try {
    const reviews = await ReviewModel.find();

    return reviews;
  } catch (err: any) {
    throw new Error(err);
  }
};

export const findById = async (id: string) => {
  try {
    const review = await ReviewModel.findOne({ _id: id });
    if (!review) return false;

    return review;
  } catch (err: any) {
    throw new Error(err);
  }
};

// Review Update: Important to use Postman.
// Keep in mind that the first parameter of the requested ID is the id "User" ande the second is the ID "Review"
export const updateReview = async (id: string, input: {}) => {
  try {
    const review = await ReviewModel.findByIdAndUpdate({ _id: id }, input, {
      new: true,
    }).populate({ path: "User", select: ["username", "description"] });
    return review;
  } catch (err: any) {
    throw new Error(err);
  }
};

export const deleteById = async (id: string) => {
  try {
    const review = await ReviewModel.findOneAndDelete({ _id: id });
    if (!review) return false;

    return review;
  } catch (err: any) {
    throw new Error(err);
  }
};
