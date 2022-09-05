import { ChangeEvent, useEffect, useState, useContext } from "react"
import { Box, Button, FormControl, FormHelperText, MenuItem, InputLabel, Select, TextField, Typography } from "@mui/material"
import { useNavigate, useParams } from "react-router-dom"

import Tema from "../../../models/Tema"
import Postagem from "../../../models/Postagem"
import { AuthContext } from "../../../contexts/AuthContext"
import { atualizar, buscar, cadastrar } from "../../../services/Services"

function FormularioPostagem() {

  let navigate = useNavigate()

  const { id } = useParams<{ id: string }>()

  const { user } = useContext(AuthContext)
    
  const token = user.token

  const [temas, setTemas] = useState<Tema[]>([])

  const [tema, setTema] = useState<Tema>({
    id: 0,
    descricao: ''
  })

  const [post, setPost] = useState<Postagem>({
    id: 0,
    titulo: '',
    texto: '',
    data: '',
    tema: null,
    usuario: null
  })

  async function findById(id: string) {
    await buscar(`/postagens/${id}`, setPost, {
      headers: {
        'Authorization': token
      }
    })
  }

  async function getTemas() {
    await buscar("/temas", setTemas, {
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
    getTemas()
    if (id !== undefined) {
      findById(id)
    }
  }, [id])

  useEffect(() => {
    setPost({
      ...post,
      tema: tema
    })
  }, [tema])

  function updateState(e: ChangeEvent<HTMLInputElement>) {
    setPost({
      ...post,
      [e.target.name]: e.target.value,
      tema: tema
    })
  }

  function goBack() {
    navigate('/postagens')
  }

  async function record(e: ChangeEvent<HTMLFormElement>) {
    e.preventDefault()

    if (id !== undefined) {

      try {
        await atualizar(`/postagens`, post, setPost, {
          headers: {
            'Authorization': token
          }
        })
        alert('Postagem atualizada com sucesso')

      } catch (error) {
        console.log(`${error}`)
        alert("Erro, por favor verifique a quantidade mínima de caracteres")
      }

      goBack()

    } else {
      try {
        await cadastrar(`/postagens`, post, setPost, {
          headers: {
            'Authorization': token
          }
        })

        alert("Postagem cadastrada com sucesso")

      } catch (error) {
        console.log(`${error}`)
        alert("Erro, por favor verifique a quantidade mínima de caracteres")
      }
    }
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
          Formulário de Postagem
        </Typography>

        <TextField
          value={post.titulo}
          onChange={(e: ChangeEvent<HTMLInputElement>) => updateState(e)}
          id="titulo" label="Título" name="titulo" variant="outlined"
          placeholder="Digite no mínimo 5 caracteres"
          margin="dense" fullWidth required
        />

        <TextField
          value={post.texto}
          onChange={(e: ChangeEvent<HTMLInputElement>) => updateState(e)}
          id="texto" label="Texto" name="texto" variant="outlined"
          placeholder="Digite no mínimo 10 caracteres"
          margin="normal" fullWidth required
        />

        <FormControl margin="normal" required>
          <InputLabel id="demo-simple-select-label">Tema:</InputLabel>

          <Select
            id="demo-simple-select"
            labelId="demo-simple-select-label"
            label="Tema"
            onChange={(e) => buscar(`/temas/${e.target.value}`, setTema, {
              headers: {
                  'Authorization': token
              }
          })}
          >

            {
              temas.map(item => (
                <MenuItem key={item.id} value={item.id}>{item.descricao}</MenuItem>
              ))
            }

          </Select>

          <FormHelperText>Escolha um tema para a postagem</FormHelperText>

          <Button type="submit" variant="contained" color="primary">
            Concluir
          </Button>
        </FormControl>
      </form>
    </Box >
  )
}

export default FormularioPostagem