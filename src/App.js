import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import PhoneForm from './components/PhoneForm';

class App extends Component {
  handleCreate = (data) => {
    console.log(data);
  }
  render() {
    return (
      <div>
        <PhoneForm
          onCreate={this.handleCreate}
        />
        <Button variant="contained" color="primary">
        Hello World
        </Button>
      </div>
    );
  }
}

export default App;