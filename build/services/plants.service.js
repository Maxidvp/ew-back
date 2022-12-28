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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deletePlant = exports.updatePlant = exports.findById = exports.findAll = exports.createPlant = void 0;
const plants_model_1 = __importDefault(require("../database/models/plants.model"));
const createPlant = (input) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const plant = yield plants_model_1.default.create(input);
        return plant;
    }
    catch (err) {
        throw new Error(err);
    }
});
exports.createPlant = createPlant;
const findAll = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const plants = yield plants_model_1.default.find();
        return plants;
    }
    catch (err) {
        throw new Error(err);
    }
});
exports.findAll = findAll;
const findById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const plant = yield plants_model_1.default.findOne({ _id: id });
        if (!plant)
            return false;
        return plant;
    }
    catch (err) {
        throw new Error(err);
    }
});
exports.findById = findById;
// Update User
const updatePlant = (id, input) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const user = yield plants_model_1.default.findByIdAndUpdate({ _id: id }, input, {
            new: true,
        });
        return user;
    }
    catch (err) {
        throw new Error(err);
    }
});
exports.updatePlant = updatePlant;
// Service of Delete
const deletePlant = (id, input) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const plant = yield plants_model_1.default.findById({ _id: id }, input, { new: true });
        yield (plant === null || plant === void 0 ? void 0 : plant.remove());
    }
    catch (err) {
        throw new Error(err);
    }
});
exports.deletePlant = deletePlant;
