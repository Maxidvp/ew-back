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
exports.deleteById = exports.updateReview = exports.findById = exports.findAll = exports.createReview = void 0;
const review_model_1 = require("../database/models/review.model");
// Function pair a review in the user db
const createReview = (input) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const userReview = yield review_model_1.ReviewModel.create(input);
        return userReview;
    }
    catch (err) {
        throw new Error(err);
    }
});
exports.createReview = createReview;
const findAll = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const reviews = yield review_model_1.ReviewModel.find();
        return reviews;
    }
    catch (err) {
        throw new Error(err);
    }
});
exports.findAll = findAll;
const findById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const review = yield review_model_1.ReviewModel.findOne({ _id: id });
        if (!review)
            return false;
        return review;
    }
    catch (err) {
        throw new Error(err);
    }
});
exports.findById = findById;
// Review Update: Important to use Postman.
// Keep in mind that the first parameter of the requested ID is the id "User" ande the second is the ID "Review"
const updateReview = (id, input) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const review = yield review_model_1.ReviewModel.findByIdAndUpdate({ _id: id }, input, {
            new: true,
        }).populate({ path: "User", select: ["username", "description"] });
        return review;
    }
    catch (err) {
        throw new Error(err);
    }
});
exports.updateReview = updateReview;
const deleteById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const review = yield review_model_1.ReviewModel.findOneAndDelete({ _id: id });
        if (!review)
            return false;
        return review;
    }
    catch (err) {
        throw new Error(err);
    }
});
exports.deleteById = deleteById;
