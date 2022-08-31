import { Box, Typography } from "@mui/material"
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

function Footer() {
  return (
    <Box
      display="flex"
      justifyContent="space-around"
      alignItems="center"
      style={{ backgroundColor: "#1976d2", height: "96px" }}>

      <Box display="flex" flexDirection="column" alignItems="center">
        <Typography variant="h5" align="center" style={{ color: "white" }}>
          Siga-nos nas redes sociais
        </Typography>

        <Box>
          <Typography component="a" href="https://www.facebook.com/generationbrasil" target="_blank">
            <FacebookIcon style={{ fontSize: 30, color: "white" }} />
          </Typography>

          <Typography component="a" href="https://www.instagram.com/generationbrasil" target="_blank">
            <InstagramIcon style={{ fontSize: 30, color: "white" }} />
          </Typography>

          <Typography component="a" href="https://www.linkedin.com/school/generationbrasil/" target="_blank">
            <LinkedInIcon style={{ fontSize: 30, color: "white" }} />
          </Typography>
        </Box>

      </Box>

      <Box display="flex" flexDirection="column" alignItems="center">
        <Typography style={{ color: "white" }}>© 2020 Copyright:</Typography>

        <Typography 
          component="a" 
          href="https://brasil.generation.org" 
          target="_blank"
          // color="GrayText"
          style={{ color: "white" }}
          >
          brasil.generation.org
        </Typography>
      </Box>

    </Box>
  )
}

export default Footer