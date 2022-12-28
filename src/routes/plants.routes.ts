import { Router, Response, Request } from "express";
import {
  getPlantById,
  getPlants,
  newPlant,
  removePlant,
  updatePlantById,
} from "../controllers/plants.controller";

const plantsRoutes = Router();

plantsRoutes.post("/new", newPlant);

plantsRoutes.get("/", getPlants);

plantsRoutes.get("/:id", getPlantById);

plantsRoutes.put("/:id", updatePlantById);

plantsRoutes.delete("/:id", removePlant);

export default plantsRoutes;
