import React, { Component } from 'react';
import Counter from './components/Counter';
import MUIDataTable from "mui-datatables";

function MoviePoster( picture ) {
  console.log(picture)
  return (
    <img src={picture} alt="alt" className="Movie__Poster" height="64px" />
  );
}

class App extends Component {
  
 

  state = {};

  componentDidMount() {
    this._getMovies();
  }

  _renderMovies = () => {
    const columns = ['id','picture','description','name','category','profileImage','updatedTime','createdTime','width','height','status',];

    const movies = this.state.movies.map((movie) => {
      return (
        [movie.id, MoviePoster(movie.picture, movie.name), movie.description, movie.name, movie.category, MoviePoster(movie.profileImage, movie.name), movie.updatedTime, movie.createdTime, movie.width, movie.height, movie.status]
      );
    });
    const options = {
      filter: true,
      filterType: "dropdown",
      responsive: "scroll"
    };

    return (
      <MUIDataTable 
        title={"Movie"} 
        data={movies} 
        columns={columns} 
        options={options}
        />
    )
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
        <Counter />
        { this.state.movies ? this._renderMovies() : 'Loading' }
      </div>
    );
  }
}


export default App;
