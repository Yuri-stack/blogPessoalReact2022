import { useEffect, useState, useContext } from "react"
import { useNavigate } from "react-router-dom"

import Postagem from "../../models/Postagem"
import { buscar } from "../../services/Services"
import { AuthContext } from "../../contexts/AuthContext"
import { CardPostagem } from "../../components/Postagens/CardPostagem/CardPostagem"

function ListaPostagens() {
    const [posts, setPosts] = useState<Postagem[]>([])

    const { user } = useContext(AuthContext)
    const token = user.token

    let navigate = useNavigate()

    async function getPost() {
        await buscar("/postagens", setPosts, {
            headers: {
                'Authorization': token
            }
        })
    }

    useEffect(() => {
        if (token === '') {
            alert('Você precisa estar logado')
            navigate('/')
        }
    }, [token])

    useEffect(() => {
        getPost()
    }, [posts.length])

    return (
        <>
            {
                posts.map(post => (
                    <CardPostagem key={post.id} post={post} />
                ))
            }
        </>
    )
}

export default ListaPostagens