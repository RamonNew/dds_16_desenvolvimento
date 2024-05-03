let sites = [
    { id: 1, name: "SENAI ES", site: "https://senaies.com.br/" },
    { id: 2, name: "FINDES", site: "https://findes.com.br/" },
    { id: 3, name: "Portal da Industria", site: "https://www.portaldaindustria.com.br/senai/" }
]
class SitesController {
    //Mostra a lista de sites
    index(req, res) {
        console.debug("GET :: /sites")
        return res.json(sites)
    }

    //Mostrar um elemento da lista
    show(req, res) {
        const id = parseInt(req.params.id)
        const site = sites.find(function (site) {
            return site.id === id
        })
        const status = site ? 200 : 404 //Operador ternário
        //console.log(site)
        console.debug("GET :: /sites/:id")
        return res.status(status).json(site)
    }
    //Inserir um elemento na lista
    create(req, res) {

    }
    //Atualizar um registro 
    update(req, res) {

    }
    //Deletando um registro
    destroy(req, res) {

    }
}

module.exports = new SitesController()