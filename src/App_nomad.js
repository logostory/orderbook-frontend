import React, { Component } from 'react';
import Movie from './components/Movie';
// import Button from '@material-ui/core/Button';
// import PhoneForm from './components/PhoneForm';


class App extends Component {
  // Render: componentWillMount() -> render() -> componentDidMount()
  // Update componentWillReceiveProps() -> shouldComponentUpdate() -> componentWillUpdate() -> render() -> componentDidUpdate()

  state = {};
  componentWillMount() {
    console.log('will mount');
  }

  componentDidMount() {
    this._getMovies();
  }

  _renderMovies = () => {
    const movies = this.state.movies.map((movie) => {
      return (
        <Movie
          description={movie.description}
          picture={movie.picture}
          id={movie.id}
          name={movie.name}
        />
      );
    });
    return movies;
  };

  _getMovies = async () => {
    const movies = await this._callApi();
    this.setState({
      movies
    });
  };

  _callApi = () => {
    return fetch("http://munsangdong.cafe24.com/api/card")
      .then(response => response.json())
      .then(json => json.content)
      .catch(err => console.log(err));
  }; 

  render() {
    return (
      <div className="App">
        { this.state.movies ? this._renderMovies() : 'Loading' }
      </div>
    );
  }
}

export default App;