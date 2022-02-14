import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import CardMedia from '@mui/material/CardMedia';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

const PhotoModal = (props) => {
    return (
        <Modal
            open={props.open}
            onClose={props.handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box sx={style}>
                <CardMedia
                    component="img"
                    height="240"
                    src={props.card.url}
                    alt="green iguana" />
            </Box>
        </Modal>
    )
}

export default PhotoModal;