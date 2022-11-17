import UserService from "../service/UserService.js";

class CadastroController{
     
     cadastro(req,res){
        res.render("cadastro")
     }
     salvar(req,res){
        UserService.salvar(req.body);
     }
}

export default new CadastroController();