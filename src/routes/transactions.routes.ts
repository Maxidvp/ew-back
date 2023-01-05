import { Router } from "express";
import { createTransaction } from "../controllers/transactions.controller";
import { verifyToken } from "../middlewares/validators/verifyToken";


const transactionRoutes = Router();

transactionRoutes.post("/ars/transfer", verifyToken, createTransaction);


/*

//Descomentar segun su implementacion

routes.get("/users/me", verifyToken, getUsers);

routes.get("/accounts", verifyToken, getUsers);

routes.get("/accounts/usd", verifyToken, getUsers);

routes.get("/accounts/ars", verifyToken, getUsers);

routes.get("/accounts/usd/transfer", verifyToken, getUsers);

routes.get("/accounts/usd/transfer", verifyToken, getUsers);

routes.get("/accounts/ars/deposit", verifyToken, getUsers);

routes.get("/accounts/usd/deposit", verifyToken, getUsers);

routes.get("/accounts/ars/withdrawal", verifyToken, getUsers);

routes.get("/accounts/usd/withdrawal", verifyToken, getUsers);

routes.get("/accounts/ars/fixed-term", verifyToken, getUsers);

routes.get("/accounts/usd/fixed-term", verifyToken, getUsers);

*/

export default transactionRoutes;