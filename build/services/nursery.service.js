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
exports.deleteNursery = exports.updateNursery = exports.findById = exports.findAll = exports.validatePassword = exports.createUserNursery = void 0;
const nursery_model_1 = __importDefault(require("../database/models/nursery.model"));
const jwt_1 = require("../utils/jwt");
//funcion para crear un vivero en la bbdd
const createUserNursery = (input) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const userNursery = yield nursery_model_1.default.create(input);
        return userNursery;
    }
    catch (err) {
        throw new Error(err);
    }
});
exports.createUserNursery = createUserNursery;
const validatePassword = ({ email, password, }) => __awaiter(void 0, void 0, void 0, function* () {
    const userNursery = yield nursery_model_1.default.findOne({ email: email });
    if (!userNursery)
        return false;
    const validate = yield (0, jwt_1.comparePassword)(password, userNursery.password);
    if (!validate)
        return false;
    return userNursery;
});
exports.validatePassword = validatePassword;
const findAll = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const usersNursery = yield nursery_model_1.default.find();
        return usersNursery;
    }
    catch (err) {
        throw new Error(err);
    }
});
exports.findAll = findAll;
const findById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const userNursery = yield nursery_model_1.default.findOne({ _id: id });
        if (!userNursery)
            return false;
        return userNursery;
    }
    catch (err) {
        throw new Error(err);
    }
});
exports.findById = findById;
// Update Nursery
const updateNursery = (id, input) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const userNursery = yield nursery_model_1.default.findByIdAndUpdate({ _id: id }, input, { new: true });
        return userNursery;
    }
    catch (err) {
        throw new Error(err);
    }
});
exports.updateNursery = updateNursery;
// Service of Delete
const deleteNursery = (id, input) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const nursery = yield nursery_model_1.default.findById({ _id: id }, input, {
            new: true,
        });
        yield (nursery === null || nursery === void 0 ? void 0 : nursery.remove());
    }
    catch (err) {
        throw new Error(err);
    }
});
exports.deleteNursery = deleteNursery;
