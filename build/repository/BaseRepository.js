"use strict";
//Repository pattern
//<T> significa un tipo generico que se implementa en produccion
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
exports.BaseRepository = void 0;
//Clase base contenedora de los metodos. al ser abstract solo puede ser extendida por otras clases
class BaseRepository {
    constructor(model) {
        this.model = model;
    }
    find() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.model.find();
        });
    }
    findOne(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.model.findOne({ id });
        });
    }
    create(input) {
        throw new Error("Method not implemented.");
    }
    update(id, input) {
        throw new Error("Method not implemented.");
    }
    delete(id) {
        throw new Error("Method not implemented.");
    }
}
exports.BaseRepository = BaseRepository;
