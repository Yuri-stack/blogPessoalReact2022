import { useEffect, useContext } from "react"
import { Box } from "@mui/material"
import { useNavigate } from 'react-router-dom'

import { AuthContext } from "../../contexts/AuthContext"

import './Perfil.css'

function Perfil() {
    const { user } = useContext(AuthContext)
    const token = user.token

    let navigate = useNavigate()

    useEffect(() => {
        if (token === "") {
            alert("Você precisa estar logado")
            navigate("/login")
        }
    }, [token])

    return (
        <Box className='principal'>
            <img className="capa"
                src="https://i.imgur.com/d5bMdDJ.jpg"
                alt="Capa"
            />

            <Box className='card-container'>
                <img className='perfil-imagem'
                    src={user.foto}
                    alt={user.nome} />

                <h2 className="titulos">{user.nome}</h2>
                <h2 className="titulos">{user.usuario}</h2>

            </Box>
        </Box>
    )
}

export default Perfil
