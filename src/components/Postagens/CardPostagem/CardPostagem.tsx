import { Box, Button, Card, CardActions, CardContent, Typography } from "@mui/material"
import { Link } from "react-router-dom"
import Postagem from "../../../models/Post"

interface CardPostagemProps {
    post: Postagem
}

export function CardPostagem({ post }: CardPostagemProps) {
    return (
        <Box m={2}>
            <Card variant="outlined">
                <CardContent>
                    <Typography color="textSecondary" gutterBottom>
                        Postagens
                    </Typography>

                    <Typography variant="h5" component="h2">
                        {post.titulo}
                    </Typography>

                    <Typography variant="body2" component="p">
                        {post.texto}
                    </Typography>

                    <Typography variant="body2" component="p">
                        {post.tema?.descricao}
                    </Typography>

                </CardContent>
                <CardActions>
                    <Box display="flex" justifyContent="center" mb={1.5}>

                        <Link to={``} className="text-decorator-none" >
                            <Box mx={1}>
                                <Button variant="contained" className="marginLeft" size='small' color="primary" >
                                    Atualizar
                                </Button>
                            </Box>
                        </Link>
                        <Link to={``} className="text-decorator-none">
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