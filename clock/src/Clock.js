import React, { Component } from 'react';
import './App.css';

export default class Clock extends Component{
	constructor(props){
		super(props);
		this.update_time = this.update_time.bind(this);
		this.state = {
			date: (new Date()).toLocaleTimeString()
		};
	}
    update_time(){
		this.setState({date: (new Date()).toLocaleTimeString()});
	}
    componentDidMount() {
        setInterval(this.update_time, 1000);
    }	
	render() {
		return (
			<div className="clock">
					<button className="button big-btn">{this.state.date}</button>
			</div>);
	}
}
