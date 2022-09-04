import { AppBar, Box, Button, Toolbar, Typography } from "@mui/material"
import { Link, useNavigate } from "react-router-dom"
import useLocalStorage from "react-use-localstorage"

function Navbar() {

  let history = useNavigate()

  const [token, setToken] = useLocalStorage('token')

  function logout() {
    setToken('')

    alert("Usuário deslogado")
    history("/login")
  }

  return (
    <AppBar position="static">
      <Toolbar style={{ display: "flex", justifyContent: "space-between" }}>
        <Typography variant="h6">Blog Pessoal</Typography>

        <Box style={{ display: "flex" }}>

          <Link to="/home">
            <Button style={{ display: 'block', color: 'white', margin: '16px 0' }}>
              Home
            </Button>
          </Link>

          <Link to="/postagens">
            <Button style={{ display: 'block', color: 'white', margin: '16px 0' }}>
              Postagens
            </Button>
          </Link>

          <Link to="/temas">
            <Button style={{ display: 'block', color: 'white', margin: '16px 0' }}>
              Temas
            </Button>
          </Link>

          <Link to="/formularioTema">
            <Button style={{ display: 'block', color: 'white', margin: '16px 0' }}>
              Cadastrar Tema
            </Button>
          </Link>

          <Button 
            style={{ display: 'block', color: 'white', margin: '16px 0' }} 
            onClick={ logout }
          >
            Logout
          </Button>

        </Box>
      </Toolbar>
    </AppBar>
  )
}

export default Navbar