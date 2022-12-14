import { Box, Button, Grid, Typography } from '@mui/material'
import ModalPostagem from '../../components/Postagens/ModalPostagem/ModalPostagem'
import TabPostagem from '../../components/Postagens/TabPostagem/TabPostagem'

import './Home.css'

function Home() {
    return (
        <Grid
            container
            direction="row"
            justifyContent="center"
            alignItems="center"
            style={{ backgroundColor: "#1976d2" }}>

            <Grid item xs={6}>
                <Typography
                    component="h4"  //Define Tag a ser Renderizada 
                    variant="h4"    //Define Estilos que vão ser aplicados / Funciona sem component
                    gutterBottom    //Margem Inferior
                    color="white"
                    align="center"
                    fontWeight="bold"
                >
                    Seja Bem Vinde!
                </Typography>

                <Typography
                    component="h5"
                    variant="h5"
                    gutterBottom
                    color="white"
                    align="center"
                >
                    Expresse aqui seus pensamentos e opiniões!
                </Typography>

                <Box display="flex" justifyContent="center">
                    <Box marginX={1}>
                        <ModalPostagem />
                    </Box>

                    <Button
                        variant="outlined"
                        style={{
                            borderColor: "white",
                            backgroundColor: "#1976d2",
                            color: "white"
                        }}>
                        Ver Postagens
                    </Button>
                </Box>
            </Grid>

            <Grid item xs={6}>
                <img
                    src="https://imgur.com/4qzZQ5c.png"
                    alt="Três pessoas sentadas conversando"
                    width="500px" height="500px"
                    />
            </Grid>

            <Grid item xs={12}>
                <TabPostagem />
            </Grid>
        </Grid>
    )
}

export default Home