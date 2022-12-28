"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReviewModel = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const reviewSchema = new mongoose_1.default.Schema({
    username: {
        type: mongoose_1.default.Schema.Types.ObjectId,
        ref: "User",
    },
    rate: {
        type: Number,
        default: 0,
    },
    description: {
        type: String,
    },
}, { timestamps: true });
exports.ReviewModel = mongoose_1.default.model("Review", reviewSchema);
