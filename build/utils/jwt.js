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
exports.decodeToken = exports.validateToken = exports.signToken = exports.comparePassword = exports.hashPassword = void 0;
const bcrypt_1 = __importDefault(require("bcrypt"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const hashPassword = (password) => __awaiter(void 0, void 0, void 0, function* () {
    const salt = yield bcrypt_1.default.genSalt(10);
    const hash = yield bcrypt_1.default.hashSync(password, salt);
    return hash;
});
exports.hashPassword = hashPassword;
const comparePassword = (password, userPassword) => __awaiter(void 0, void 0, void 0, function* () {
    return yield bcrypt_1.default.compare(password, userPassword);
});
exports.comparePassword = comparePassword;
const signToken = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const token = jsonwebtoken_1.default.sign(payload, "secret", { expiresIn: "1d" });
    return token;
});
exports.signToken = signToken;
const validateToken = (bearToken) => __awaiter(void 0, void 0, void 0, function* () {
    const token = bearToken.replace('Bearer ', '');
    const validate = jsonwebtoken_1.default.verify(token, "secret");
    return validate;
});
exports.validateToken = validateToken;
const decodeToken = (token) => __awaiter(void 0, void 0, void 0, function* () {
    const decode = jsonwebtoken_1.default.decode(token);
    return decode;
});
exports.decodeToken = decodeToken;
