import React, { Component } from 'react';
import Movie from './components/Movie';
// import Button from '@material-ui/core/Button';
// import PhoneForm from './components/PhoneForm';

// eslint-disable-next-line react/prefer-stateless-function

const movies = [
  "안녕",
  "하세요",
  "테스트",
  "했습니다."
];


class App extends Component {
  render() {
    // console.log(movies[0])
    return (
      <div className="App">
        <Movie title={movies[0]}/>
        <Movie title={movies[1]}/>
        <Movie title={movies[2]}/>
        <Movie title={movies[3]}/>
      </div>
    );
  }
}

export default App;