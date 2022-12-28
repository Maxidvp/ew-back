//Repository pattern
//<T> significa un tipo generico que se implementa en produccion

import mongoose from "mongoose";

//Interfaces de los metodos que interactuan con la BBDD(CRUD)

//Operaciones de escritura/modificacion
export interface IWrite<T> {
  create(input: T): Promise<boolean>;
  update(id: string, input: T): Promise<boolean>;
  delete(id: string): Promise<boolean>;
}

//Operaciones de lectura
export interface IRead<T> {
  find(): Promise<T[]>;
  findOne(id: string): Promise<T>;
}

export interface IRepository<T> extends IRead<T>, IWrite<T> {}

//Clase base contenedora de los metodos. al ser abstract solo puede ser extendida por otras clases
export abstract class BaseRepository<T> implements IRepository<T> {
  model: mongoose.Model<T>;

  constructor(model: mongoose.Model<T>) {
    this.model = model;
  }

  async find(): Promise<T[]> {
    return await this.model.find();
  }
  async findOne(id: string): Promise<T> {
    return await this.model.findOne({ id });
  }
  create(input: T): Promise<boolean> {
    throw new Error("Method not implemented.");
  }
  update(id: string, input: T): Promise<boolean> {
    throw new Error("Method not implemented.");
  }
  delete(id: string): Promise<boolean> {
    throw new Error("Method not implemented.");
  }
}
