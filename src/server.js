/*  Exemplos de Get
app.get("/", (request, response) => {
    response.send('hello world')
})

app.get("/message/:id/:user", (request, response) => {
    const { id, user } = request.params
    response.send(`Message ${id}. User: ${user}.`)
})

//http://localhost:3333/users?page=10&limit=10
app.get("/users", (request, response) => {
    const { page, limit } = request.query
    response.send(`Pagina ${page}. mostrar: ${limit}.`)
}) */
require("express-async-errors")
const AppError = require("./utils/AppError")

const express = require("express");

const routes = require("./routes")

const app = express();
app.use(express.json())

app.use(routes)

//http://localhost:3333/users?page=10&limit=10


app.use((error, request, response, next) => {
    if (error instanceof AppError) {
        return response.status(error.statusCode).json({
            status: "error",
            message: error.message

        })
    }

    console.log(error)

    return response.status(500).json({
        status: "error",
        message: "Internal server error"
    })
})
const PORT = 3333;

app.listen(PORT, () => console.log(`Server is running on Port ${PORT}`));