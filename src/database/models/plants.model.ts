import mongoose from "mongoose";
import { IPlant } from "../../interfaces/plants.interface";

export interface IPlantsDocument extends IPlant, mongoose.Document {}

const plantsSchema = new mongoose.Schema<IPlantsDocument>(
  {
    title: { type: String, required: false },
    info: { type: Object, required: false },
    imgs: [{ type: String, required: false }],
    location: { type: Object, required: false },
  },
  { timestamps: true }
);

const PlantsModel = mongoose.model<IPlantsDocument>("Plants", plantsSchema);

export default PlantsModel;
