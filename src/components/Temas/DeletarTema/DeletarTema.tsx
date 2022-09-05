import { useEffect, useState, useContext } from "react"
import { Box, Button, Card, CardActions, CardContent, Typography } from "@mui/material"
import { useNavigate, useParams } from "react-router-dom"
import { toast } from 'react-toastify';

import Tema from "../../../models/Tema"
import { AuthContext } from "../../../contexts/AuthContext"
import { buscar, deletar } from "../../../services/Services"

function DeletarTema() {

    let navigate = useNavigate()

    const { id } = useParams<{ id: string }>()

    const [tema, setTema] = useState<Tema>()

    const { user } = useContext(AuthContext)

    const token = user.token

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

    async function confirm() {
        try {
            await deletar(`/temas/${id}`, {
                headers: {
                    'Authorization': token
                }
            });

            toast.success('Tema deletado com sucesso', {
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

        goBack()
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
                            {tema?.descricao}
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