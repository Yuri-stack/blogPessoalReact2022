import { Box, Button, Card, CardActions, CardContent, Typography } from "@mui/material"

function confimar(){}

function cancelar(){}

function DeletarTema() {
    return (
        <Box m={2}>
            <Card variant="outlined">
                <CardContent>
                    <Box justifyContent="center">
                        <Typography color="textSecondary" gutterBottom>
                            Deseja deletar o Tema:
                        </Typography>
                        <Typography color="textSecondary">
                            {/* {tema?.descricao} */}
                        </Typography>
                    </Box>
                </CardContent>

                <CardActions>
                    <Box display="flex" justifyContent="start" ml={1.0} mb={2} >
                        <Box mx={2}>
                            <Button 
                                onClick={confimar} 
                                variant="contained" 
                                size='large' 
                                color="primary"
                            >
                                Sim
                            </Button>
                        </Box>
                        <Box mx={2}>
                            <Button 
                                onClick={cancelar} 
                                variant="contained" 
                                size='large' 
                                color="secondary"
                            >
                                Não
                            </Button>
                        </Box>
                    </Box>
                </CardActions>

            </Card>
        </Box>
    )
}

export default DeletarTema