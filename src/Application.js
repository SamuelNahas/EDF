import express from "express";
import { resolve } from "path";
import expressEjsLayouts from "express-ejs-layouts";
import router from "./router.js"

export default class Application{

    constructor(){
        this.servidor = express();
        this.midware();
        this.router();
    }
  
   midware(){
      this.servidor.use("/boostrap", express.static(resolve("./node_modules/bootstrap/dist")))
      this.servidor.use("/public", express.static(resolve("./src/public")))
      
      this.servidor.use(expressEjsLayouts)
      this.servidor.set("views", resolve("./src/views"))
      this.servidor.set("view engine", "ejs")
      
      this.servidor.use(express.urlencoded({extend:true}))
      this.servidor.use(express.json())
   }

   router(){
     this.servidor.use(router)
   }

}
