import { NextComponentType } from "next";

import Paper from '@mui/material/Paper'
import Button from '@mui/material/Button';
import Carousel from 'react-material-ui-carousel'

import { carouselCollection } from "../public/data/carouselCollection";

const Item = (props: any) => {
    return (
        <Paper>
            <h2>{props.item.name}</h2>
            <p>{props.item.description}</p>
            <Button>Check it out!</Button>
        </Paper>
    )
}

const MainCarousel: NextComponentType = () => {
    return (
        <Carousel>
            {
                carouselCollection.map((carouselItem, i) => {
                    return (
                        <Item key={i} item={carouselItem} />
                    )
                })
            }
        </Carousel>
    )


}

export default MainCarousel;
