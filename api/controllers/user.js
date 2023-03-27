///importando o express
import express from "express";
///importando o controlller de user
import { getUsers, addUser, updateUser, deleteUser, getNome } from "../controllers/user.js";



///const router para usar como rota
const router = express.Router();

///rota com getUsers
router.get("/", getUsers);   

router.post("/", addUser);

router.put("/:id", updateUser);

router.delete("/:id", deleteUser);

router.get ("/:nome", getNome);


///exportando a rota
export  default router;
