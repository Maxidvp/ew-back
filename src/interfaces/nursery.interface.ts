import { IRolesDocument } from "../database/models/roles.model";
import { IPlantsDocument } from "../database/models/plants.model";

export interface INursery {
  username: string;
  birthdate: Date;
  img: string;
  social: string;
  email: string;
  password: string;
  telephone: number;
  province: string;
  city: string;
  adress: string;
  role?: IRolesDocument["_id"];
  plants?: IPlantsDocument["_id"]
}
