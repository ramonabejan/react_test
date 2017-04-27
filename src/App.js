import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import UserInformation from './UserInformation';



class App extends Component {

  constructor(props) {
    super(props);
    //state = user info 
    //displayUserButton: Click me button to display user info
    //displayRepoButton Show repositories button to display repositories
    this.state = { user: {},displayUserButton:true,displayRepoButton:false};
    this.apiUrl= 'https://api.github.com/users/';
    this.username= 'ramonabejan';
    
  }

  getUserInformation = () => {
    //https://api.github.com/users/ramonabejan
    fetch(`${this.apiUrl}${this.username}`)
   
      .then(response => response.json())
      .then(responseData => {
        this.setState({ user: responseData, displayUserButton:false, displayRepoButton: true});
      })
      .catch( error => {
        console.log('Error fetching and parsing data', error);
      })

  }

  // fetch repositories info 
  getRepoInformation = () =>  {
    fetch(`${this.apiUrl}${this.username}/repos`)
      .then(response => response.json())
      .then(responseData => {
        this.setState({ repo: responseData, displayRepoButton: false});
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

          { this.state.displayUserButton ?

          <p>Click on the button to fetch the user information</p>

          : null }

          { this.state.displayUserButton ?

            <button  onClick={this.getUserInformation}> Click me </button> 
          : null }
          
        </div>
        
        <UserInformation 
          data={this.state.user} 
          getRepoInfo={this.getRepoInformation} 
          repoData={this.state.repo} 
          displayRepo={this.state.displayRepoButton} />      

      </div>
    );
  }
}


export default App;
