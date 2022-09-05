import { ChangeEvent, useEffect, useState, useContext } from "react"
import { Box, Button, TextField, Typography } from "@mui/material"
import { useNavigate, useParams } from "react-router-dom"
import { toast } from 'react-toastify';

import Tema from "../../../models/Tema"
import { AuthContext } from "../../../contexts/AuthContext"
import { atualizar, buscar, cadastrar } from "../../../services/Services"

function FormularioTema() {

    let navigate = useNavigate()

    const { id } = useParams<{ id: string }>()

    const { user } = useContext(AuthContext)

    const token = user.token

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
            toast.info('Você precisa estar logado', {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: false,
                theme: "colored",
                progress: undefined,
            })

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

    function goBack() {
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

                toast.success('Tema atualizado com sucesso', {
                    position: "top-right",
                    autoClose: 2000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: false,
                    draggable: false,
                    theme: "colored",
                    progress: undefined,
                })

            } catch (error) {
                console.log(error)
                toast.error('Erro, por favor verifique a quantidade mínima de caracteres', {
                    position: "top-right",
                    autoClose: 2000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: false,
                    draggable: false,
                    theme: "colored",
                    progress: undefined,
                })
            }

        } else {
            try {
                await cadastrar(`/temas`, tema, setTema, {
                    headers: {
                        'Authorization': token
                    }
                })

                toast.success('Tema cadastrado com sucesso', {
                    position: "top-right",
                    autoClose: 2000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: false,
                    draggable: false,
                    theme: "colored",
                    progress: undefined,
                })

            } catch (error) {
                console.log(error)
                toast.error('Erro, por favor verifique a quantidade mínima de caracteres', {
                    position: "top-right",
                    autoClose: 2000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: false,
                    draggable: false,
                    theme: "colored",
                    progress: undefined,
                })
            }
        }

        goBack()
    }

    return (
        <Box paddingX={50} paddingY={8}>
            <form onSubmit={record}>
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