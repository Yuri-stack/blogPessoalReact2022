import { Box, Button, Grid, TextField, Typography } from "@mui/material"
import { Link } from "react-router-dom"

function Login() {
    return (
        <Grid container alignItems='center'>

            <Grid item xs={6} alignItems='center'>

                <Box paddingX={20}>

                    <form>
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
                            id='usuario' 
                            label='Usuário' 
                            variant='outlined' 
                            name='usuario' 
                            margin='normal'
                            required
                            fullWidth
                        />

                        <TextField 
                            id='Senha' 
                            label='Senha' 
                            variant='outlined' 
                            name='senha' 
                            margin='normal' 
                            type='password'
                            required
                            fullWidth />

                        <Box marginTop={2} textAlign='center'>
                            <Link to='/home'>
                                <Button 
                                    type='submit' 
                                    variant='contained' 
                                    color='primary'
                                >
                                    Logar
                                </Button>
                            </Link>
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

            <Grid item xs={6} style={{
                backgroundImage: `url(https://i.imgur.com/d5bMdDJ.jpg)`,
                backgroundRepeat: 'no-repeat', width: '100vh', minHeight: '100vh', backgroundSize: 'cover', backgroundPosition: 'center'
            }}>

            </Grid>
        </Grid>
    )
}

export default Login