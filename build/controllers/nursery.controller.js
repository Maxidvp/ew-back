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
exports.removeNursery = exports.updateNurseryById = exports.getNurseryById = exports.getNurseries = exports.loginNursery = exports.registerNursery = void 0;
const nursery_service_1 = require("../services/nursery.service");
const jwt_1 = require("../utils/jwt");
//register controller
const registerNursery = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { username, email, password, telephone, province, city, adress, birthdate, img, social, } = req.body;
        const newNursery = {
            username,
            email,
            password,
            telephone,
            province,
            city,
            adress,
            birthdate,
            img,
            social,
        };
        const nursery = yield (0, nursery_service_1.createUserNursery)(newNursery);
        return res.send({ message: "User registered successfully", nursery });
    }
    catch (err) {
        return res.status(409).send("Error at register" + err);
    }
});
exports.registerNursery = registerNursery;
//login controller
const loginNursery = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { email, password } = req.body;
        const userValidation = { email, password };
        const validate = yield (0, nursery_service_1.validatePassword)(userValidation);
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
            .send({ message: "Nursery succesffully auth" });
    }
    catch (err) {
        return res.status(409).send(err);
    }
});
exports.loginNursery = loginNursery;
//find all nurseries in DB
const getNurseries = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const nurseries = yield (0, nursery_service_1.findAll)();
        return res.send(nurseries);
    }
    catch (err) {
        return res.status(409).send(err);
    }
});
exports.getNurseries = getNurseries;
//find one user by ID
const getNurseryById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const nursery = yield (0, nursery_service_1.findById)(id);
        return res.send(nursery);
    }
    catch (err) {
        return res.status(404).send("Nursery not found");
    }
});
exports.getNurseryById = getNurseryById;
// update nursery by ID
const updateNurseryById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const nursery = yield (0, nursery_service_1.findById)(id);
    if (!nursery) {
        return res.status(404).send("Nursery not found");
    }
    const { email, username, telephone, province, city, adress, password, birthdate, img, social,
    //plants,
     } = req.body;
    //const hash = await hashPassword(password);
    //const hashNursery = await hashPassword(nursery.password);
    const newNursery = {
        email: email ? email : nursery.email,
        username: username ? username : nursery.username,
        telephone: telephone ? telephone : nursery.telephone,
        province: province ? province : nursery.province,
        city: city ? city : nursery.city,
        adress: adress ? adress : nursery.adress,
        password: password ? password : nursery.password,
        birthdate: birthdate ? birthdate : nursery.birthdate,
        img: img ? img : nursery.img,
        social: social ? social : nursery.social,
        //plants: plants ? plants : nursery.plants,
    };
    try {
        const nursery = yield (0, nursery_service_1.updateNursery)(id, newNursery);
        return res.send(nursery);
    }
    catch (err) {
        return res.status(400).send("Error updating Nursery " + err);
    }
});
exports.updateNurseryById = updateNurseryById;
// Nursery Delete of the BBDD
const removeNursery = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const { email, password, username } = req.body;
        if (!email || !password || !username)
            return res.status(404).send("No existe el link");
        const nurseryDelete = { email, password, username };
        const nurseryRemove = yield (0, nursery_service_1.deleteNursery)(id, nurseryDelete);
        return res.status(200).send(`El usuario ${nurseryRemove} fue eliminado`);
    }
    catch (error) {
        if (error.kind === "ObjectId") {
            return res.status(403).send("Fomrato User ID not found");
        }
        return res.status(500).send("Error del servidor");
    }
});
exports.removeNursery = removeNursery;
