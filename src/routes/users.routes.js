const { Router } = require("express")
const UsersController = require("../controllers/UsersController")

const usersRoutes = Router();

function myMiddlewere(request, response, next) {
    console.log("voce passou pelo middlewere")

    next()
}


const usersController = new UsersController()

usersRoutes.post("/", myMiddlewere, usersController.create);
usersRoutes.put("/:id", usersController.update);

module.exports = usersRoutes;