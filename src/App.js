import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import UserInformation from './UserInformation';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = { user: {},display:true};
    
  }

  getUserInformation() {

    fetch('https://api.github.com/users/ramonabejan')
      .then(response => response.json())
      .then(responseData => {
        this.setState({ user: responseData, display:false});
      })
      .catch( error => {
        console.log('Error fetching and parsing data', error);
      })

  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <div className="App-intro">
          <hr />

          { this.state.display ?

          <p>Click on the button to fetch the user information</p>

          : null }

          { this.state.display ?

            <button  onClick={this.getUserInformation.bind(this)}>
            Click me
          </button> : null }
          
        </div>
        <UserInformation data={this.state.user} />
      </div>
    );
  }
}

export default App;
