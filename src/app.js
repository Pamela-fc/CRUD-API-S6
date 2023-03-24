import express from 'express'
import Usuario from '../controllers/Usuario.js';
import Tarefa from '../controllers/Tarefa.js';

const app = express()
const cad = [];


app.use(express.json());

app.get('/req/:nome/:cargo', function(req, res){
    res.send("<h1>Ola "+req.params.nome+"</h1>" + "<h1>Seu trabalho é ser "+req.params.cargo+"</h1>");

});


app.post('/cad', function(req, res){
    console.log(request.body);
    return response.send("Voce acessou a API tipo Post");
})

app.get('/',function(req, res){
    return res.json({mensage: "Voce acessou a api"});
});


Usuario.rotas(app)
Tarefa.rotas(app)

export default app