import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import useLocalStorage from "react-use-localstorage"

import Postagem from "../../models/Postagem"
import { CardPostagem } from "../../components/Postagens/CardPostagem/CardPostagem"
import { buscar } from "../../services/Services"

function ListaPostagens() {
    const [posts, setPosts] = useState<Postagem[]>([])
    const [token, setToken] = useLocalStorage('token')

    let history = useNavigate()

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
            history('/')
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