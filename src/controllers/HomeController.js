import UserService from "../service/UserService.js";

class HomeController{
     
     index(req,res){
        res.render("home")
     }

}

export default new HomeController();