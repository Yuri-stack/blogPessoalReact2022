import { useEffect, useState } from "react"
import { Box, Button, Card, CardActions, CardContent, Typography } from "@mui/material"
import { useNavigate, useParams } from "react-router-dom"
import useLocalStorage from "react-use-localstorage"

import Postagem from "../../../models/Postagem"
import { buscar, deletar } from "../../../services/Services"

function DeletarPostagem() {

    let navigate = useNavigate()

    const { id } = useParams<{ id: string }>()

    const [token, setToken] = useLocalStorage('token')

    const [post, setPosts] = useState<Postagem>()

    async function findById(id: string) {
        await buscar(`/postagens/${id}`, setPosts, {
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

    async function confirm() {
        try {
            await deletar(`/postagens/${id}`, {
                headers: {
                    'Authorization': token
                }
            });

            alert('Postagem deletada com sucesso')

        } catch (error) {
            console.log(`${error}`)
            alert('Erro ao deletar')
        }

        goBack()
    }

    function goBack() {
        navigate('/postagens')
    }

    return (
        <Box m={2}>
            <Card variant="outlined">
                <CardContent>
                    <Box justifyContent="center">
                        <Typography color="textSecondary" gutterBottom>
                            Deseja deletar a Postagem:
                        </Typography>
                        <Typography color="textSecondary">
                            {post?.titulo}
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

export default DeletarPostagem