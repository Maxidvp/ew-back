"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.removePlant = exports.updatePlantById = exports.getPlantById = exports.getPlants = exports.newPlant = void 0;
const plants_service_1 = require("../services/plants.service");
//create new plant
const newPlant = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { title, info, imgs, location } = req.body;
        if (!title || !info || !imgs || !location) {
            return res.status(400).send("Missing fields");
        }
        const newPlant = { title, info, imgs, location };
        const plants = yield (0, plants_service_1.createPlant)(newPlant);
        return res.send(plants);
    }
    catch (err) {
        return res.status(409).send("Error creating new plant" + err);
    }
});
exports.newPlant = newPlant;
//find all plants in DB
const getPlants = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const plants = yield (0, plants_service_1.findAll)();
        return res.send(plants);
    }
    catch (err) {
        return res.status(409).send(err);
    }
});
exports.getPlants = getPlants;
//find one plant by ID
const getPlantById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const plant = yield (0, plants_service_1.findById)(id);
        return res.send(plant);
    }
    catch (err) {
        return res.status(404).send("Plants not found");
    }
});
exports.getPlantById = getPlantById;
// update plant by ID
const updatePlantById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const plant = yield (0, plants_service_1.findById)(id);
    if (!plant) {
        return res.status(404).send("Plant not found");
    }
    const { title, info, imgs, location } = req.body;
    const newPlant = {
        title: title ? title : plant.title,
        info: info ? info : plant.info,
        imgs: imgs ? imgs : plant.imgs,
        location: location ? location : plant.location,
    };
    try {
        const plant = yield (0, plants_service_1.updatePlant)(id, newPlant);
        return res.send(plant);
    }
    catch (err) {
        return res.status(400).send("Error updating Plant " + err);
    }
});
exports.updatePlantById = updatePlantById;
// Plant Delete of the BBDD
const removePlant = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const { title } = req.body;
        if (!title)
            return res.status(404).send("No existe el link");
        const plantDelete = { title };
        const plantRemove = yield (0, plants_service_1.deletePlant)(id, plantDelete);
        return res.status(200).send(`El usuario ${plantRemove} fue eliminado`);
    }
    catch (error) {
        if (error.kind === "ObjectId") {
            return res.status(403).send("Fomrato User ID not found");
        }
        return res.status(500).send("Error del servidor");
    }
});
exports.removePlant = removePlant;
