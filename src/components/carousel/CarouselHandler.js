import React, { Component } from 'react';
import {Carousel, CarouselItem} from 'react-bootstrap';
import Item from './Item'

class CarouselHandler extends Component {
    constructor(props) {
        super(props)
        this.state = {
            items: []
        }
    }

    componentDidMount(){
        fetch(this.props['data-url'])
            .then((response)=>response.json())
            .then((items)=>this.setState({items: items}))
    }

    render(){
        return (
            <div className="display">

                <Carousel defaultActiveIndex={0}>
                    {this.state.items.map(i => {
                        return <CarouselItem key={i.id}>
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