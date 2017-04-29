import React, { Component } from 'react';
import NavBar from './NavBar';
import Clock from './Clock';
import Footer from './Footer';
import './App.css';

class App extends Component {
  render() {
    return (
		<div>
			<div className="App-container">
				<NavBar className="navbar" title={'Clock'} />
			</div>
			<Clock />
			<Footer />
		</div>
    );
  }
}

export default App;
