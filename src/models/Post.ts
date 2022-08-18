import Theme from "./Theme"
import User from "./User"

interface Post{
    id: number
    titulo: string
    texto: string
    data: string
    tema: Theme
    usuario: User
}

export default Post