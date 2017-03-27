import React, { Component } from 'react';
import './NavBar.css';

export default class Footer extends Component {
	render() {
		return (
				<div className="footer">
				<button className="github-button"></button>
				<button className="facebook-button"></button>
				<button className="youtube-button"></button>
				<button className="linkedin-button"></button>
				</div>
			);
	}
}
