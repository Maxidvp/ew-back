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
exports.deleteReviewById = exports.putReview = exports.getReviewById = exports.getReviews = exports.registerReview = void 0;
const review_service_1 = require("../services/review.service");
const registerReview = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { username, description, rate } = req.body;
        const newReview = { username, description, rate };
        const review = yield (0, review_service_1.createReview)(newReview);
        return res.send({ message: "Review created successfully", review });
    }
    catch (err) {
        return res.status(409).send("Error at register" + err);
    }
});
exports.registerReview = registerReview;
//find all reviews in DB
const getReviews = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const reviews = yield (0, review_service_1.findAll)();
        return res.send(reviews);
    }
    catch (err) {
        return res.status(409).send(err);
    }
});
exports.getReviews = getReviews;
//find one review by ID
const getReviewById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const review = yield (0, review_service_1.findById)(id);
        if (!review)
            return res.status(404).send("Review not found");
        return res.send(review);
    }
    catch (err) {
        return res.status(409).send(err);
    }
});
exports.getReviewById = getReviewById;
// update review
const putReview = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const { username, rate, description } = req.body;
    const newEdit = {
        username: username.id,
        rate,
        description,
    };
    try {
        const reviewId = yield (0, review_service_1.updateReview)(id, newEdit);
        return res.send(reviewId);
    }
    catch (err) {
        return res.status(404).send("Review not actualized");
    }
});
exports.putReview = putReview;
//delete one review by ID
const deleteReviewById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const review = yield (0, review_service_1.deleteById)(id);
        if (!review)
            return res.status(404).send("Review not found");
        return res.send({ message: "Review deleted successfully", review });
    }
    catch (err) {
        return res.status(409).send(err);
    }
});
exports.deleteReviewById = deleteReviewById;
