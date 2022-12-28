import mongoose from "mongoose";
import { IRoles } from "../../interfaces/roles.interface";

export interface IRolesDocument extends IRoles, mongoose.Document {}

const rolesSchema = new mongoose.Schema<IRolesDocument>({
  role: { type: String, required: true },
  permission: [{ type: String, required: true }],
});

const RolesModel = mongoose.model<IRolesDocument>("Roles", rolesSchema);

export default RolesModel;
