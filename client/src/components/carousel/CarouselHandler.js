import React, { Component } from 'react';
import {Carousel, CarouselItem} from 'react-bootstrap';
import Item from './Item'

class CarouselHandler extends Component {


    render(){
        const items = this.props.items;
        return (
            <div className="display">
                <Carousel defaultActiveIndex={0}>
                    {items.map(i => {
                        return <CarouselItem key={i._id}>
                            <Item {...i}/>
                        </CarouselItem>
                    })
                    }
                </Carousel>
            </div>
        )
    }
}

export default CarouselHandler