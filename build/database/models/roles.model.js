"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const rolesSchema = new mongoose_1.default.Schema({
    role: { type: String, required: true },
    permission: [{ type: String, required: true }],
});
const RolesModel = mongoose_1.default.model("Roles", rolesSchema);
exports.default = RolesModel;
