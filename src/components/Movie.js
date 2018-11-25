import React, { Component } from 'react';
import './Movie.css';

class Movie extends Component {
    render() {
        console.log(this.props);
        return (
            <div className="movie">
                <Movieposter />
                <p>{this.props.title}</p>
            </div>
        );
    }
}

class Movieposter extends Component {
    render() {
        return (
            <img src ="https://starwarsblog.starwars.com/wp-content/uploads/2015/10/tfa_poster_wide_header-1536x864-959818851016.jpg" width="400px"></img>
        );
    }
}



export default Movie;