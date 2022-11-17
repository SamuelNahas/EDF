import { Router } from "express";
import CadastroController from "./controllers/CadastroController.js";
import HomeController from "./controllers/HomeController.js";
const router = Router();

router.get("/", HomeController.index);
router.get("/cadastro", CadastroController.cadastro);

export default router;