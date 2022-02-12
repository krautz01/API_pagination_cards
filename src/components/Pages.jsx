import React, { useEffect, useState } from "react";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import * as axios from 'axios';

const Pages = (props) => {
    /* let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let pages = [
        users: [ ],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1,
    ];

    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    };

    return <div className={styles.userBlock}>
        <div> {pages.map(p => {
            return <span className={props.currentPage === p && styles.selectedPage}
                onClick={(e) => {
                    props.onPageChanged(p);
                }}>{p}</span>
        })}
         */

    const [Images, setImages] = useState([]);
    const [currentPage, setCurrentPage] = useEffect(1);
    const [totalUsersCount,] =


        axios.get("http://jsonplaceholder.typicode.com/photos").then(response => {
            setImages(response.data);
        });

    return (
        <div>
            {
                Images.map(Image => (
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


        </div>
    )
};

export default Pages;