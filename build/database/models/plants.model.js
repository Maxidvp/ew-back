"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const plantsSchema = new mongoose_1.default.Schema({
    title: { type: String, required: false },
    info: { type: Object, required: false },
    imgs: [{ type: String, required: false }],
    location: { type: Object, required: false },
}, { timestamps: true });
const PlantsModel = mongoose_1.default.model("Plants", plantsSchema);
exports.default = PlantsModel;
