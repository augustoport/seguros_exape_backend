const { Router } = require("express");
const AutenticacaoController = require("../../controllers/AutenticacaoController")

const routes = Router();

routes.post("/login", AutenticacaoController.doLogin);
routes.get("/logout", AutenticacaoController.doLogout);

module.exports = routes;