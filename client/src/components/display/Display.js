import React, { Component } from 'react';
import './Display.css';
import CarouselHandler from "../carousel/CarouselHandler";

class Display extends Component {

    constructor(){
        super();
        this.state = {
            chars: []
        };
        this.filter = this.filter.bind(this);
    }

    filter(url){
        this.callApi(url)
            .then(res => this.setState({ chars: res.chars }))
            .catch(err => console.log(err));
    }

    componentDidMount() {
        this.filter('chars');
    }

    callApi = async (url) => {
        const response = await fetch('/' + url);
        const body = await response.json();
        if (response.status !== 200) throw Error(body.message);
        return body;
    };

    render(){
        return (
            <div className="display">
                <header className="App-header">
                    <h1 className="App-title">Carousel App</h1>
                </header>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-12 col-xs-12">
                            <CarouselHandler items={this.state.chars} />
                        </div>
                    </div>
                </div>
            </div>
        )
    }

}

export default Display;