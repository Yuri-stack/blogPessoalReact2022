import { ChangeEvent, useEffect, useState } from "react"
import { Box, Button, TextField, Typography } from "@mui/material"
import { useNavigate, useParams } from "react-router-dom"
import useLocalStorage from "react-use-localstorage"

import Tema from "../../../models/Tema"
import { atualizar, buscar, cadastrar } from "../../../services/Services"

function FormularioTema() {

    let navigate = useNavigate()

    const { id } = useParams<{ id: string }>()

    const [token, setToken] = useLocalStorage('token')

    const [tema, setTema] = useState<Tema>({
        id: 0,
        descricao: ''
    })

    async function findById(id: string) {
        await buscar(`/temas/${id}`, setTema, {
            headers: {
                'Authorization': token
            }
        })
    }

    useEffect(() => {
        if (token === "") {
            alert("Você precisa estar logado")
            navigate('/login')
        }
    }, [token])

    useEffect(() => {
        if (id !== undefined) {
            findById(id)
        }
    }, [id])

    function updateState(e: ChangeEvent<HTMLInputElement>) {
        setTema({
            ...tema,
            [e.target.name]: e.target.value
        })
    }

    function goBack(){
        navigate('/temas')
    }

    async function record(e: ChangeEvent<HTMLFormElement>) {
        e.preventDefault()

        if (id !== undefined) {

            try {
                await atualizar(`/temas`, tema, setTema, {
                    headers: {
                        'Authorization': token
                    }
                })
                alert('Tema atualizado com sucesso')

            } catch (error) {
                console.log(`${error}`)
                alert("Erro, por favor verifique a quantidade mínima de caracteres")
            }

        } else {
            try {
                await cadastrar(`/temas`, tema, setTema, {
                    headers: {
                        'Authorization': token
                    }
                })

                alert("Tema cadastrado com sucesso")
                
            } catch (error) {
                console.log(`${error}`)
                alert("Erro, por favor verifique a quantidade mínima de caracteres")
            }
        }

        goBack()
    }

    return (
        <Box paddingX={50} paddingY={8}>
            <form onSubmit={ record }>
                <Typography
                    component="h1"
                    variant="h3"
                    color="textSecondary"
                    align="center"
                >
                    Formulário de Tema
                </Typography>

                <TextField
                    value={tema.descricao}
                    onChange={(e: ChangeEvent<HTMLInputElement>) => updateState(e)}
                    id="descricao"
                    label="Descrição"
                    variant="outlined"
                    name="descricao"
                    margin="normal"
                    placeholder="Digite o nome ou descrição do Tema"
                    required
                    fullWidth
                />
                <Button type="submit" variant="contained" color="primary">
                    Concluir
                </Button>
            </form>
        </Box>
    )
}

export default FormularioTema