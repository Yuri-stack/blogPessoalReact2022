import { useContext } from "react"
import { AppBar, Box, Button, Toolbar, Typography } from "@mui/material"
import { Link, useNavigate } from "react-router-dom"
import { toast } from 'react-toastify';

import { AuthContext } from "../../../contexts/AuthContext"

function Navbar() {

  let navigate = useNavigate()

  const { user, handleLogout } = useContext(AuthContext)

  function logout() {
    handleLogout()

    toast.info('Usuário deslogado', {
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

  let navbar

  if (user.token !== "") {
    navbar =
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

            <Link to="/perfil">
              <Button style={{ display: 'block', color: 'white', margin: '16px 0' }}>
                Perfil
              </Button>
            </Link>

            <Button
              style={{ display: 'block', color: 'white', margin: '16px 0' }}
              onClick={logout}
            >
              Logout
            </Button>

          </Box>
        </Toolbar>
      </AppBar>
  }

  return (
    <>
      { navbar }
    </>
  )
}

export default Navbar