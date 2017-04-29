import React, { Component } from 'react';
import Link from './Link';
import './App.css';

export default class Footer extends Component {
	render(){
		return (
			<div className="table">
				<ul className="h-list">
					<li><Link text="LambdaSchool-Pro" uri={'https://lambdaschool.com/pro'} /></li> |
					<li><Link text="React-II" uri={'https://github.com/lubelle/LS-Pro-React-II'} /></li> |
					<li><Link text="lubelle" uri={'https://github.com/lubelle'} /></li>
				</ul>
			</div>
		);
	}
}