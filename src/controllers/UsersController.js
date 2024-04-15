/* 
  * Index - Get para Listar varios registros.
  * Show - Get exibir um usuario especifico.
  * create - Post para criar um registro.
  * update - PUT - atualizar um registro.
  * delete - DELETE - para deletar um registro
  */

const AppError = require("../utils/AppError")
class UsersController {
    create(request, response) {
        const { name, email, password } = request.body

      if (!name) {
        throw new AppError("o NOME É OBRIGATORIO")
      }

        response.status(201).json({ name, email, password })
    }


}

module.exports = UsersController