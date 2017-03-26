import React, { Component } from 'react';
import NavBar from './NavBar';
import Clock from './Clock';
import './App.css';

class App extends Component {
  render() {
    return (
		<div className="App">
			<NavBar title={'My React App'} />
			<Clock />
		</div>
    );
  }
}

export default App;
