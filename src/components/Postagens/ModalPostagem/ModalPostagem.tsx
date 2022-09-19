import { useState } from 'react'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import FormularioPostagem from '../FormularioPostagem/FormularioPostagem';

import './ModalPostagem.css'

function ModalPostagem() {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <>
            <Button variant="outlined" className='btnModal' onClick={handleOpen}>Nova Postagem</Button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box className="modal">
                    <FormularioPostagem />
                </Box>
            </Modal>
        </>
    )
}

export default ModalPostagem