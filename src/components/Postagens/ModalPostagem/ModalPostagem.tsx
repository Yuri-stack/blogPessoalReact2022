import { useState } from 'react'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import FormularioPostagem from '../FormularioPostagem/FormularioPostagem';

import './ModalPostagem.css'

function ModalPostagem() {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const [modalStyle] = useState({
        transform: 'translate(-50%, -50%)',
    })
    
    const bodyModal = (
        <div>
            <FormularioPostagem />
        </div>
    )

    return (
        <>
            <Button onClick={handleOpen}>Open modal</Button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box className="modal">
                    { bodyModal }
                </Box>
            </Modal>
        </>
    )
}

export default ModalPostagem