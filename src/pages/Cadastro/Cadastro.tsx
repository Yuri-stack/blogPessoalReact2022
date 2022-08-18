import { Box, Button, Grid, TextField, Typography } from "@mui/material"
import { Link } from "react-router-dom"

import "./Cadastro.css"

function Cadastro() {
  return (
    <Grid container>

      <Grid item xs={6} className='imagemCadastro' />

      <Grid item xs={6}>

        <Box padding={4}>

          <form>
            <Typography
              component='h3'
              variant='h3'
              gutterBottom
              align='center'
              fontWeight="bold"
            >
              Cadastrar
            </Typography>

            <TextField
              id='nome' label='Nome' variant='outlined'
              name='nome' margin='normal'
              required
              fullWidth
            />
            <TextField
              id='usuario' label='Usuario' variant='outlined'
              name='usuario' margin='normal'
              required
              fullWidth
            />
            <TextField
              id='foto' label='Foto' variant='outlined'
              name='foto' margin='normal'
              required
              fullWidth
            />
            <TextField
              id='senha' label='Senha' variant='outlined'
              name='senha' margin='normal' type='password'
              required
              fullWidth
            />
            <TextField
              id='confirmarSenha' label='Confirmar Senha' variant='outlined'
              name='confirmarSenha' margin='normal' type='password'
              required
              fullWidth
            />

            <Box display="flex" justifyContent="center" gap={2} margin={2}>

              <Link to='/login'>
                <Button variant='contained' color='secondary'>
                  Cancelar
                </Button>
              </Link>

              <Button type='submit' variant='contained'>
                Cadastrar
              </Button>
            </Box>
            
          </form>

        </Box>

      </Grid>

    </Grid>
  )
}

export default Cadastro