//functional component
import React, { Component } from 'react';
import './App.css';

export default function(props) {
	return (
		<div>
			<a href={props.uri}> {props.text} </a>
		</div>
	);
}