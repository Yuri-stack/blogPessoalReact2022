import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import useLocalStorage from "react-use-localstorage"

import Tema from "../../models/Tema"
import { Temas } from "../../components/Temas/Temas"
import { buscar } from "../../services/Services"

function ListaTema() {
    const [temas, setTemas] = useState<Tema[]>([])
    const [token, setToken] = useLocalStorage('token')

    let history = useNavigate()

    async function getTemas() {
        await buscar('/temas', setTemas, {
            headers: { 'Authorization': token }
        })
    }

    useEffect(() => {
        if (token === '') {
            alert('Você precisa estar logado')
            history('/')
        }
    }, [token])

    useEffect(() => {
        getTemas()
    }, [temas.length])

    return (
        <>
            {
                temas.map(tema => (
                    <Temas key={tema.id} tema={tema} />
                ))}
        </>
    )
}

export default ListaTema