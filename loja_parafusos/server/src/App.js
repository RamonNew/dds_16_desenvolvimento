const express = require('express')
const app = express()
const UsuarioController = require("./controllers/UsuarioController")
const CategoriaController = require("./controllers/CategoriaController")
const ParafusoController = require("./controllers/ParafusoController")

const port = 5000
//Permitindo leitura de JSON
app.use(express.json())

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

app.post("/usuarios",UsuarioController.create)
app.get("/usuarios",UsuarioController.read)
app.put("/usuarios/:id_usuario",UsuarioController.update)
app.delete("/usuarios/:id_usuario",UsuarioController.delete)

app.post("/categoria",CategoriaController.create)
app.get("/categoria",CategoriaController.read)
app.put("/categoria/:id_categoria",CategoriaController.update)
app.delete("/categoria/:id_categoria",CategoriaController.delete)

app.post("/parafuso", ParafusoController.create)
app.get("/parafuso", ParafusoController.read)
app.put("/parafuso/:id_parafuso",ParafusoController.update)
app.delete("/parafuso/:id_parafuso", ParafusoController.delete)

app.post("/logar",UsuarioController.logar)
