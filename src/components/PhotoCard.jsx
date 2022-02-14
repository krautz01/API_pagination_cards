import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';

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

const PhotoCard = (props) => {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    return (
        <div className='card'>
            <Card sx={{maxWidth: 345}} spacing={2}>
                <CardMedia
                    component="img"
                    height="140"
                    src={props.card.url}
                    alt="green iguana"
                    onClick={handleOpen}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {props.card.title}
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size="small" onClick={() => props.removeCard(props.card)}>Delete</Button>
                </CardActions>
            </Card>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <CardMedia
                    component="img"
                    height="240"
                    src={props.card.url}
                    alt="green iguana"/>
                </Box>
            </Modal>
        </div>
    )
}

export default PhotoCard;