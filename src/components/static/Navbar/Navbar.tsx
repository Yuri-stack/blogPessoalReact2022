import { AppBar, Box, Button, Toolbar, Typography } from "@mui/material"

function Navbar() {
  return (
    <AppBar position="static">
      <Toolbar style={{ display: "flex", justifyContent: "space-between" }}>
        <Typography variant="h6">Blog Pessoal</Typography>

        {/* <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}> */}
        <Box style={{ display: "flex" }}>
          {/* <Button sx={{ my: 2, color: 'white', display: 'block' }}>
            Home
          </Button> */}

          <Button style={{ display: 'block', color: 'white', margin: '16px 0' }}>
            Home
          </Button>

          <Button style={{ display: 'block', color: 'white', margin: '16px 0' }}>
            Postagens
          </Button>

          <Button style={{ display: 'block', color: 'white', margin: '16px 0' }}>
            Temas
          </Button>

          <Button style={{ display: 'block', color: 'white', margin: '16px 0' }}>
            Cadastrar Tema
          </Button>

          <Button style={{ display: 'block', color: 'white', margin: '16px 0' }}>
            Logout
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  )
}

export default Navbar