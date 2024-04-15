/* 
  * Index - Get para Listar varios registros.
  * Show - Get exibir um usuario especifico.
  * create - Post para criar um registro.
  * update - PUT - atualizar um registro.
  * delete - DELETE - para deletar um registro
  */

class UsersController {
    create(request, response) {
        const { name, email, password } = request.body

        response.status(201).json({ name, email, password })
    }


}

module.exports = UsersController