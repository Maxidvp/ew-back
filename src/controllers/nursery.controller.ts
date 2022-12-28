import { Request, Response } from "express";
import { INursery } from "../interfaces/nursery.interface";
import {
  createUserNursery,
  validatePassword,
  findAll,
  findById,
  updateNursery,
  deleteNursery,
} from "../services/nursery.service";
import { hashPassword, signToken } from "../utils/jwt";

//register controller
export const registerNursery = async (req: Request, res: Response) => {
  try {
    const {
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
    } = req.body;

    const newNursery: Omit<INursery, "role"> = {
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

    const nursery = await createUserNursery(newNursery);

    return res.send({ message: "User registered successfully", nursery });
  } catch (err: any) {
    return res.status(409).send("Error at register" + err);
  }
};

//login controller
export const loginNursery = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;

    const userValidation = { email, password };

    const validate = await validatePassword(userValidation);

    if (!validate) {
      return res.status(401).send("Wrong email or password");
    }

    //data para encriptar
    const encrypt = {
      _id: validate._id,
    };

    //sign payload
    const token = await signToken(encrypt);

    //generar refresh token

    return res
      .header("Authorization", token)
      .send({ message: "Nursery succesffully auth" });
  } catch (err: any) {
    return res.status(409).send(err);
  }
};

//find all nurseries in DB
export const getNurseries = async (req: Request, res: Response) => {
  try {
    const nurseries = await findAll();

    return res.send(nurseries);
  } catch (err: any) {
    return res.status(409).send(err);
  }
};

//find one user by ID
export const getNurseryById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    const nursery = await findById(id);

    return res.send(nursery);
  } catch (err: any) {
    return res.status(404).send("Nursery not found");
  }
};

// update nursery by ID
export const updateNurseryById = async (req: Request, res: Response) => {
  const { id } = req.params;
  const nursery = await findById(id);
  if (!nursery) {
    return res.status(404).send("Nursery not found");
  }

  const {
    email,
    username,
    telephone,
    province,
    city,
    adress,
    password,
    birthdate,
    img,
    social,
    //plants,
  } = req.body;

  //const hash = await hashPassword(password);
  //const hashNursery = await hashPassword(nursery.password);

  const newNursery: Omit<INursery, "role" | "plants"> = {
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
    const nursery = await updateNursery(id, newNursery);

    return res.send(nursery);
  } catch (err: any) {
    return res.status(400).send("Error updating Nursery " + err);
  }
};

// Nursery Delete of the BBDD
export const removeNursery = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { email, password, username } = req.body;

    if (!email || !password || !username)
      return res.status(404).send("No existe el link");

    const nurseryDelete = { email, password, username };
    const nurseryRemove = await deleteNursery(id, nurseryDelete);

    return res.status(200).send(`El usuario ${nurseryRemove} fue eliminado`);
  } catch (error: any) {
    if (error.kind === "ObjectId") {
      return res.status(403).send("Fomrato User ID not found");
    }
    return res.status(500).send("Error del servidor");
  }
};
