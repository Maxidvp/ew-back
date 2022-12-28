import mongoose from "mongoose";
import { INursery } from "../../interfaces/nursery.interface";
import { hashPassword } from "../../utils/jwt";

export interface INurseryDocument extends INursery, mongoose.Document {}

const nurserySchema = new mongoose.Schema<INurseryDocument>(
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
    telephone: {
      type: Number,
      unique: true,
    },
    province: {
      type: String,
    },
    city: {
      type: String,
    },
    adress: {
      type: String,
    },
    role: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Roles",
    },
    plants: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Plants",
    }
  },
  { timestamps: true }
);

nurserySchema.pre("save", async function (next) {
  let nursery = this;

  if (!nursery.isModified("password")) {
    return next();
  }

  try {
    const hash = await hashPassword(nursery.password);

    nursery.password = hash;
    return next();
  } catch (err: any) {
    throw new Error("Error hashing \n" + err);
  }
});

const NurseryModel = mongoose.model<INurseryDocument>("Nursery", nurserySchema);

export default NurseryModel;
