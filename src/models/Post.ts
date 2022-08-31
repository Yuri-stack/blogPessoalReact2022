import Tema from "./Tema"
import Usuario from "./Usuario"

interface Postagem{
    id: number
    titulo: string
    texto: string
    data: string
    tema: Tema
    usuario: Usuario
}

export default Postagem