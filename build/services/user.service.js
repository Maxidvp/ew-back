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
exports.deleteUser = exports.updateUser = exports.findByEmail = exports.findById = exports.findAll = exports.validatePassword = exports.createUser = void 0;
const user_model_1 = __importDefault(require("../database/models/user.model"));
const jwt_1 = require("../utils/jwt");
//test
//import { UserRepo } from "../repository/UserRepository";
//funcion para crear un usuario en la bbdd
const createUser = (input) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const user = yield user_model_1.default.create(input);
        return user;
    }
    catch (err) {
        throw new Error(err);
    }
});
exports.createUser = createUser;
//funcion que valida pwd. recibe como parametros email y pwd ingresados en request. defino los tipos
//el servicio se consume desde el controlador para la ruta /login
const validatePassword = ({ email, password, }) => __awaiter(void 0, void 0, void 0, function* () {
    //busco user por email
    const user = yield user_model_1.default.findOne({ email: email });
    if (!user)
        return false;
    //comparo pwd
    const validate = yield (0, jwt_1.comparePassword)(password, user.password);
    if (!validate)
        return false;
    return user;
});
exports.validatePassword = validatePassword;
const findAll = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const users = yield user_model_1.default.find();
        return users;
        //return await UserRepo.find();
    }
    catch (err) {
        throw new Error(err);
    }
});
exports.findAll = findAll;
const findById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const user = yield user_model_1.default.findById({ _id: id });
        if (!user)
            return false;
        return user;
        //return await UserRepo.findOne(id);
    }
    catch (err) {
        throw new Error(err);
    }
});
exports.findById = findById;
const findByEmail = (email) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const user = yield user_model_1.default.findOne({ email: email }, 'first_name last_name');
        if (!user)
            return false;
        return user;
        //return await UserRepo.findOne(id);
    }
    catch (err) {
        throw new Error(err);
    }
});
exports.findByEmail = findByEmail;
// Update User
const updateUser = (id, input) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const user = yield user_model_1.default.findByIdAndUpdate({ _id: id }, input, {
            new: true,
        });
        return user;
    }
    catch (err) {
        throw new Error(err);
    }
});
exports.updateUser = updateUser;
// Service of Delete
const deleteUser = (id, input) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const user = yield user_model_1.default.findById({ _id: id }, input, { new: true });
        yield (user === null || user === void 0 ? void 0 : user.remove());
    }
    catch (err) {
        throw new Error(err);
    }
});
exports.deleteUser = deleteUser;
