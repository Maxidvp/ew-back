import mongoose from "mongoose";
import { IUser } from "../../interfaces/user.interface";
import { hashPassword } from "../../utils/jwt";

export interface IUserDocument extends IUser, mongoose.Document {}

const userSchema = new mongoose.Schema<IUserDocument>(
  {
    username: {
      type: String,
    },
    birthdate: {
      type: Date,
    },
    img: {
      type: String,
    },
    social: {
      type: String,
    },
    email: {
      type: String,
    },
    password: {
      type: String,
    },
    first_name: {
      type: String,
    },
    last_name: {
      type: String,
    },
    role: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Roles",
    },
    review: {
      type: mongoose.Types.ObjectId,
      ref: "Review",
    },
  },
  { timestamps: true }
);

userSchema.pre("save", async function (next) {
  let user = this;

  if (!user.isModified("password")) {
    return next();
  }

  try {
    const hash = await hashPassword(user.password);

    user.password = hash;
    return next();
  } catch (err: any) {
    throw new Error("Error hashing \n" + err);
  }
});

const UserModel = mongoose.model<IUserDocument>("User", userSchema);

export default UserModel;
