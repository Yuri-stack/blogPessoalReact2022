import { ChangeEvent, useEffect, useState } from "react"
import { Box, Button, Card, CardActions, CardContent, Typography } from "@mui/material"
import { useNavigate, useParams } from "react-router-dom"
import useLocalStorage from "react-use-localstorage"

import Tema from "../../../models/Tema"
import { buscar, deletar } from "../../../services/Services"

function DeletarTema() {

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
            navigate('/login')
        }
    }, [token])

    useEffect(() => {
        if (id !== undefined) {
            findById(id)
        }
    }, [id])

    async function confirm() {
        try {
            await deletar(`/temas/${id}`, {
                headers: {
                    'Authorization': token
                }
            });

            alert('Tema deletado com sucesso')

        } catch (error) {
            console.log(`${error}`)
            alert('Erro ao deletar')
        }

        navigate('/temas')
    }

    function goBack() {
        navigate('/temas')
    }

    return (
        <Box m={2}>
            <Card variant="outlined">
                <CardContent>
                    <Box justifyContent="center">
                        <Typography color="textSecondary" gutterBottom>
                            Deseja deletar o Tema:
                        </Typography>
                        <Typography color="textSecondary">
                            {tema.descricao}
                        </Typography>
                    </Box>
                </CardContent>

                <CardActions>
                    <Box display="flex" justifyContent="start" ml={1.0} mb={2} >
                        <Box mx={2}>
                            <Button
                                onClick={confirm}
                                variant="contained"
                                size='large'
                                color="primary"
                            >
                                Sim
                            </Button>
                        </Box>
                        <Box mx={2}>
                            <Button
                                onClick={goBack}
                                variant="contained"
                                size='large'
                                color="secondary"
                            >
                                Não
                            </Button>
                        </Box>
                    </Box>
                </CardActions>

            </Card>
        </Box>
    )
}

export default DeletarTema