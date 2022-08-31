import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import useLocalStorage from "react-use-localstorage"
import Postagens from "../../components/Postagens/Postagens"
import Postagem from "../../models/Post"
import { buscar } from "../../services/Services"

function ListaPostagem() {
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
                    <Postagens key={post.id} post={post} />
                ))
            }
        </>
    )
}

export default ListaPostagem