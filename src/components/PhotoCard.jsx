import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const PhotoCard = (props) => {
    return (
    <Card sx={{ maxWidth: 345 }}>
        <CardMedia
            component="img"
            height="140"
            src={props.card.url}
            alt="green iguana"
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
    )
}

export default PhotoCard;