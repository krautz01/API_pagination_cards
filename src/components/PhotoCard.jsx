import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import PhotoModal from './PhotoModal';

const PhotoCard = (props) => {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    return (
        <div className='card'>
            <Card sx={{maxWidth: 450}}>
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
            <PhotoModal open={open} handleClose={handleClose} card={props.card}/>
        </div>
    )
}

export default PhotoCard;