import { AppBar, Box, Button, Toolbar, Typography } from "@mui/material"
import { Link } from "react-router-dom"

function Navbar() {
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

          <Link to="/">
            <Button style={{ display: 'block', color: 'white', margin: '16px 0' }}>
              Logout
            </Button>
          </Link>

        </Box>
      </Toolbar>
    </AppBar>
  )
}

export default Navbar