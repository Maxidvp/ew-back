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
exports.removeUser = exports.updateUserById = exports.getUserById = exports.getUsers = exports.loginUser = exports.registerUser = void 0;
const user_service_1 = require("../services/user.service");
const jwt_1 = require("../utils/jwt");
//register controller
const registerUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { username, email, password, first_name, last_name, birthdate, img, social } = req.body;
        const newUser = {
            username,
            email,
            password,
            first_name,
            last_name,
            birthdate,
            img,
            social,
        };
        const user = yield (0, user_service_1.createUser)(newUser);
        return res.send({ message: "User registered successfully", user });
    }
    catch (err) {
        return res.status(409).send("Error at register " + err);
    }
});
exports.registerUser = registerUser;
//login controller
const loginUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { email, password } = req.body;
        const userValidation = { email, password };
        const validate = yield (0, user_service_1.validatePassword)(userValidation);
        if (!validate) {
            return res.status(401).send("Wrong email or password");
        }
        //data para encriptar
        const encrypt = {
            _id: validate._id,
        };
        //sign payload
        const token = yield (0, jwt_1.signToken)(encrypt);
        //generar refresh token
        return res
            .header("Authorization", token)
            .send({ message: "User succesffully auth" });
    }
    catch (err) {
        return res.status(409).send(err);
    }
});
exports.loginUser = loginUser;
//find all users in DB
const getUsers = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const users = yield (0, user_service_1.findAll)();
        return res.send(users);
    }
    catch (err) {
        return res.status(409).send(err);
    }
});
exports.getUsers = getUsers;
//find one user by ID
const getUserById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const user = yield (0, user_service_1.findById)(id);
        return res.send(user);
    }
    catch (err) {
        return res.status(404).send("User not found");
    }
});
exports.getUserById = getUserById;
// update user by ID
const updateUserById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const user = yield (0, user_service_1.findById)(id);
    if (!user) {
        return res.status(404).send("User not found");
    }
    const { email, username, password, first_name, last_name, birthdate, img, social } = req.body;
    //const hash = await hashPassword(password);
    //const hashUsername = await hashPassword(user.password);
    const newUser = {
        email: email ? email : user.email,
        username: username ? username : user.username,
        password: password ? password : user.password,
        first_name: first_name ? first_name : user.first_name,
        last_name: last_name ? last_name : user.last_name,
        birthdate: birthdate ? birthdate : user.birthdate,
        img: img ? img : user.img,
        social: social ? social : user.social,
    };
    try {
        const user = yield (0, user_service_1.updateUser)(id, newUser);
        return res.send(user);
    }
    catch (err) {
        return res.status(400).send("Error updating User " + err);
    }
});
exports.updateUserById = updateUserById;
// User Delete of the BBDD
const removeUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const { email, password, username } = req.body;
        if (!email || !password || !username)
            return res.status(404).send("No existe el link");
        const userDelete = { email, password, username };
        const userRemove = yield (0, user_service_1.deleteUser)(id, userDelete);
        return res.status(200).send(`El usuario ${userRemove} fue eliminado`);
    }
    catch (error) {
        if (error.kind === "ObjectId") {
            return res.status(403).send("Fomrato User ID not found");
        }
        return res.status(500).send("Error del servidor");
    }
});
exports.removeUser = removeUser;
