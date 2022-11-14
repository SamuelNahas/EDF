import UserService from "../service/UserService.js";

class HomeController{
     
     index(req,res){
        res.render("home")
     }
     salvar(req,res){
        UserService.salvar(req.body);
     }

}

export default new HomeController();