import React, { useEffect, useState } from "react";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import * as axios from 'axios';
const BASE_URL = "http://jsonplaceholder.typicode.com/photos?"

const Pages = (props) => {

    const [Images, setImages] = useState([]);

    useEffect(() => {
        axios.get(BASE_URL).then(response => {
            setImages(response);
            console.log(Images);
        });
    })

    return (
        <div>
            {/* {Images.map(Image => (
                <div>{
                    <Card sx={{ maxWidth: 345 }} key={Image.id}>
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                height="140"
                                src={Image.url}
                                alt="green iguana"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    {Image.title}
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    Description
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                        <CardActions>
                            <Button size="small" color="primary">
                                Share
                            </Button>
                        </CardActions>
                    </Card>
                }
                </div>
            )
            )
            }

 */}
        </div>
    )
};

export default Pages;