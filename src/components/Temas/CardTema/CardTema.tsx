import { Box, Button, Card, CardActions, CardContent, Typography } from "@mui/material"
import { Link } from "react-router-dom"
import Tema from "../../../models/Tema"

interface CardTemaProps{
    tema: Tema
}

export function CardTema({ tema }: CardTemaProps) {
    return (
        <Box m={2} >
            <Card variant="outlined">
                <CardContent>
                    <Typography color="textSecondary" gutterBottom>
                        Tema
                    </Typography>
                    <Typography variant="h5" component="h2">
                        { tema.descricao }
                    </Typography>
                </CardContent>
                <CardActions>
                    <Box display="flex" justifyContent="center" mb={1.5} >

                        <Link to={``}>
                            <Box mx={1}>
                                <Button variant="contained" className="marginLeft" size='small' color="primary" >
                                    Atualizar
                                </Button>
                            </Box>
                        </Link>
                        <Link to={``}>
                            <Box mx={1}>
                                <Button variant="contained" size='small' color="secondary">
                                    Deletar
                                </Button>
                            </Box>
                        </Link>
                    </Box>
                </CardActions>
            </Card>
        </Box>
    )
}
