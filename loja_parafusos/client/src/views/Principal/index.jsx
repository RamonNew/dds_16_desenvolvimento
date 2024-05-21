import { useState, useEffect } from 'react'

function Principal() {
    const [parafusos, setParafusos] = useState([])
    useEffect(() => {
        document.title = "Tela Principal Sistema"

        const id_usuario = localStorage.getItem("id_usuario")
        if(!id_usuario){
            window.location.href = "./"
        }
        setParafusos([
            { id: 1, nome: "Sextavado", id_categoria: 1 },
            { id: 2, nome: "Francês", id_categoria: 2 },
            { id: 3, nome: "Máqiona", id_categoria: 2 },
        ])
    },[])
    return (
        <div>
            {parafusos.map(
                parafuso => (
                    <div key={parafuso.id}>
                        <div>Id: {parafuso.id} Nome: {parafuso.nome} Categoria: {parafuso.id_categoria}</div>
                    </div>
                )
            )}
        </div>
    )
}

export default Principal