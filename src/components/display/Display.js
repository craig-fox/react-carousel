import React, { Component } from 'react';
import './Display.css';
import CarouselHandler from "../carousel/CarouselHandler";

class Display extends Component {

    render(){
        const dataUrl = "/data/item-data.json"
        return (
            <div className="display">
                <header className="App-header">
                    <h1 className="App-title">Carousel App</h1>
                </header>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-12 col-xs-12">
                            <CarouselHandler data-url={dataUrl} />
                        </div>
                    </div>
                </div>
            </div>
        )
    }

}

export default Display;