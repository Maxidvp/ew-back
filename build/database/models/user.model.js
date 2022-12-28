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
const mongoose_1 = __importDefault(require("mongoose"));
const jwt_1 = require("../../utils/jwt");
const userSchema = new mongoose_1.default.Schema({
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
    first_name: {
        type: String,
    },
    last_name: {
        type: String,
    },
    role: {
        type: mongoose_1.default.Schema.Types.ObjectId,
        ref: "Roles",
    },
    review: {
        type: mongoose_1.default.Types.ObjectId,
        ref: "Review",
    },
}, { timestamps: true });
userSchema.pre("save", function (next) {
    return __awaiter(this, void 0, void 0, function* () {
        let user = this;
        if (!user.isModified("password")) {
            return next();
        }
        try {
            const hash = yield (0, jwt_1.hashPassword)(user.password);
            user.password = hash;
            return next();
        }
        catch (err) {
            throw new Error("Error hashing \n" + err);
        }
    });
});
const UserModel = mongoose_1.default.model("User", userSchema);
exports.default = UserModel;
