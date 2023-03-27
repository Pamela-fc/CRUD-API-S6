///importando o express
import express from "express";
///importando o controlller de user
import { getUsers } from "../controllers/user.js";

///const router para usar como rota
const router = express.Router();

///rota com getUsers
router.get("/", getUsers);   

///exportando a rota
export  default router;
