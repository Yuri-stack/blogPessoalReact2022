import { ChangeEvent, useEffect, useState, useContext } from "react"
import { Box, Button, Grid, TextField, Typography } from "@mui/material"
import { Link, useNavigate } from "react-router-dom"

import { AuthContext } from "../../contexts/AuthContext"
import UserLogin from "../../models/UserLogin"

import './Login.css'

function Login() {

    let navigate = useNavigate()

    const [userLogin, setUserLogin] = useState<UserLogin>({} as UserLogin)

    const { user, handleLogin } = useContext(AuthContext)

    useEffect(() => {
        if (user.token !== "") {
            navigate('/home')
        }
    }, [user])

    function updateState(e: ChangeEvent<HTMLInputElement>) {
        setUserLogin({
            ...userLogin,
            [e.target.name]: e.target.value
        })
    }

    function logar(e: ChangeEvent<HTMLFormElement>) {
        e.preventDefault()
        handleLogin(userLogin)
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