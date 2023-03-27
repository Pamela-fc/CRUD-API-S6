///importando o db
import { db } from "../db.js";

///exportando o getUsers
export const getUsers = (_, res) => {

    ///const de query para pegar do campo usuarios no banco de dados
    const q = "SELECT * FROM usuarios";
    
    ///função para puxar do banco de dados
    db.query(q, (err, data) => {
        if (err) return res.json(err);

        return res.status(200).json(data);
    });
};
