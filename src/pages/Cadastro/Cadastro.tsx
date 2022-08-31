import { ChangeEvent, useEffect, useState } from "react"
import { Box, Button, Grid, TextField, Typography } from "@mui/material"
import { Link, useNavigate } from "react-router-dom"

import User from "../../models/User"
import { cadastrarUsuario } from "../../services/Services"

import "./Cadastro.css"

function Cadastro() {

  let navigate = useNavigate()

  const [confirmarSenha, setConfirmarSenha] = useState<String>("")

  const [user, setUser] = useState<User>({
    id: 0,
    nome: '',
    usuario: '',
    senha: '',
    foto: ''
  })

  const [userResult, setUserResult] = useState<User>({
    id: 0,
    nome: '',
    usuario: '',
    senha: '',
    foto: ''
  })

  useEffect(() => {
    if (userResult.id !== 0) {
      navigate("/login")
    }
  }, [userResult])

  function checkPassword(e: ChangeEvent<HTMLInputElement>) {
    setConfirmarSenha(e.target.value)
  }

  function updatedState(e: ChangeEvent<HTMLInputElement>) {
    setUser({
      ...user,
      [e.target.name]: e.target.value
    })
  }

  async function cadastrar(e: ChangeEvent<HTMLFormElement>) {
    e.preventDefault()

    if (confirmarSenha === user.senha && user.senha.length >= 8) {

      try {
        await cadastrarUsuario(`/usuarios/cadastrar`, user, setUserResult)
        alert('Usuario cadastrado com sucesso')

      } catch (error) {
        console.log(`Error: ${error}`)
        alert("Erro ao cadastrar o Usuário")
      }

    } else {
      alert('Dados inconsistentes. Verifique as informações de cadastro.')
      setUser({ ...user, senha: "" })
      setConfirmarSenha("")
    }
  }

  return (
    <Grid container>

      <Grid item xs={6} className='imagemCadastro' />

      <Grid item xs={6}>

        <Box padding={4}>

          <form onSubmit={cadastrar}>
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
              value={user.nome}
              onChange={(e: ChangeEvent<HTMLInputElement>) => updatedState(e)}
              id='nome' label='Nome' variant='outlined'
              name='nome' margin='normal'
              required
              fullWidth
            />
            <TextField
              value={user.usuario}
              onChange={(e: ChangeEvent<HTMLInputElement>) => updatedState(e)}
              id='usuario' label='Usuario' variant='outlined'
              name='usuario' margin='normal'
              required
              fullWidth
            />
            <TextField
              value={user.foto}
              onChange={(e: ChangeEvent<HTMLInputElement>) => updatedState(e)}
              id='foto' label='Foto' variant='outlined'
              name='foto' margin='normal'
              required
              fullWidth
            />
            <TextField
              value={user.senha}
              onChange={(e: ChangeEvent<HTMLInputElement>) => updatedState(e)}
              id='senha' label='Senha' variant='outlined'
              name='senha' margin='normal' type='password'
              required
              fullWidth
            />
            <TextField
              value={confirmarSenha}
              onChange={(e: ChangeEvent<HTMLInputElement>) => checkPassword(e)}
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