import { Box, Button, TextField, Typography } from "@mui/material"

function FormularioTema() {
    return (
        <Box paddingX={50} paddingY={8}>
            <form /*onSubmit={onSubmit}*/>
                <Typography
                    component="h1"
                    variant="h3" 
                    color="textSecondary" 
                    align="center"
                >
                    Formulário de Tema
                </Typography>
                
                <TextField
                    // value={tema.descricao}
                    // onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)}
                    id="descricao"
                    label="Descrição"
                    variant="outlined"
                    name="descricao"
                    margin="normal"
                    required
                    fullWidth
                />
                <Button type="submit" variant="contained" color="primary">
                    Concluir
                </Button>
            </form>
        </Box>
    )
}

export default FormularioTema