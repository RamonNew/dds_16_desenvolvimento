const express = require('express')
const app = express()
const UsuarioController = require("./controllers/UsuarioController")

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
