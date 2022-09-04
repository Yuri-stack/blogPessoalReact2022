import { ChangeEvent, useEffect, useState } from "react"
import { Box, Button, Grid, TextField, Typography } from "@mui/material"
import { Link, useNavigate } from "react-router-dom"

import useLocalStorage from "react-use-localstorage"

import UserLogin from "../../models/UserLogin"
import { login } from "../../services/Services"

import './Login.css'

function Login() {

    let navigate = useNavigate()

    const [token, setToken] = useLocalStorage('token')

    const [userLogin, setUserLogin] = useState<UserLogin>({} as UserLogin)

    useEffect(() => {
        if (token !== "") {
            navigate('/home')
        }
    }, [token])

    function updateState(e: ChangeEvent<HTMLInputElement>) {
        setUserLogin({
            ...userLogin,
            [e.target.name]: e.target.value
        })
    }

    async function logar(e: ChangeEvent<HTMLFormElement>) {
        e.preventDefault()

        try {
            await login(`/usuarios/logar`, userLogin, setToken)
            alert("Usuário logado com sucesso")

        } catch (error) {
            alert("Dados do usuário inconsistentes")
        }
    }

    return (
        <Grid container alignItems='center'>

            <Grid item xs={6} alignItems='center'>

                <Box paddingX={20}>

                    <form onSubmit={logar}>
                        <Typography
                            component='h3'
                            variant='h3'
                            gutterBottom
                            align='center'
                            fontWeight="bold"
                        >
                            Entrar
                        </Typography>

                        <TextField
                            value={userLogin.usuario}
                            onChange={(e: ChangeEvent<HTMLInputElement>) => updateState(e)}
                            id='usuario'
                            label='Usuário'
                            variant='outlined'
                            name='usuario'
                            margin='normal'
                            required
                            fullWidth
                        />

                        <TextField
                            value={userLogin.senha}
                            onChange={(e: ChangeEvent<HTMLInputElement>) => updateState(e)}
                            id='senha'
                            label='Senha'
                            variant='outlined'
                            name='senha'
                            margin='normal'
                            type='password'
                            required
                            fullWidth />

                        <Box marginTop={2} textAlign='center'>
                            <Button type='submit' variant='contained' color='primary'>
                                Logar
                            </Button>
                        </Box>

                    </form>

                    <Box display='flex' justifyContent='center' marginTop={2}>
                        <Box marginRight={1}>
                            <Typography
                                variant='subtitle1'
                                gutterBottom
                                align='center'
                            >
                                Não tem uma conta?
                            </Typography>
                        </Box>

                        <Typography
                            variant='subtitle1'
                            gutterBottom
                            align='center'
                            fontWeight="bold"
                        >
                            <Link to='/cadastro'>
                                Cadastre-se
                            </Link>
                        </Typography>
                    </Box>
                </Box>
            </Grid>

            <Grid xs={6} className='imagem'></Grid>
        </Grid>
    )
}

export default Login