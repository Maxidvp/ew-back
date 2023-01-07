import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export const hashPassword = async (password: string) => {
  const salt = await bcrypt.genSalt(10);
  const hash = await bcrypt.hashSync(password, salt);
  
  return hash;
};

export const comparePassword = async (
  password: string,
  userPassword: string
) => {
  return await bcrypt.compare(password, userPassword);
};

export const signToken = async (payload: {}) => {
  const token = jwt.sign(payload, "secret", { expiresIn: "1d" });
  return token;
};

export const validateToken = async (bearToken: string) => {
  const token = bearToken.replace('Bearer ','')
  const validate = jwt.verify(token, "secret");
  return validate;
};

export const decodeToken = async (token: string) => {
  const decode = jwt.decode(token);
  return decode;
};
