import { useEffect, useState, useContext } from "react"
import { useNavigate } from "react-router-dom"

import Tema from "../../models/Tema"
import { buscar } from "../../services/Services"
import { AuthContext } from "../../contexts/AuthContext"
import { CardTema } from "../../components/Temas/CardTema/CardTema"

function ListaTema() {
    const [temas, setTemas] = useState<Tema[]>([])

    const { user } = useContext(AuthContext)
    
    const token = user.token

    let navigate = useNavigate()

    async function getTemas() {
        await buscar('/temas', setTemas, {
            headers: { 'Authorization': token }
        })
    }

    useEffect(() => {
        if (token === '') {
            alert('Você precisa estar logado')
            navigate('/login')
        }
    }, [token])

    useEffect(() => {
        getTemas()
    }, [temas.length])

    return (
        <>
            {
                temas.map(tema => (
                    <CardTema key={tema.id} tema={tema} />
                ))}
        </>
    )
}

export default ListaTema