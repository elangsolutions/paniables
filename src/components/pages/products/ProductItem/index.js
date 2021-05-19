import React from 'react';
import {Card, CardActionArea, Button, CardActions, CardContent, CardMedia, Typography} from '@material-ui/core';
import {makeStyles} from "@material-ui/core";
const defaultImage =  '../../../../../public/img/icons/defaultItemImage.png'

const ProductItem = (product) => {


    const useStyles = makeStyles({
        root: {
            maxWidth: 345,
        },
        media: {
            height: 140,
        },
    });

    const classes = useStyles();

    const {title = 'Un titulo', description = 'Sin desc', img , comment} = product

    return (
        <Card className={classes.root}>
            <CardActionArea>
                <CardMedia
                    className={classes.media}
                    image={defaultImage}
                    title="Contemplative Reptile"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        Lizard
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                        across all continents except Antarctica
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button size="small" color="primary">
                    Share
                </Button>
                <Button size="small" color="primary">
                    Learn More
                </Button>
            </CardActions>
        </Card>)
}

export default ProductItem