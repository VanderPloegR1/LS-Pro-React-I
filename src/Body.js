import React, { Component } from 'react';
import './Body.css';
import './NavBar.css';
import ProfilePic from './ProfilePic';

export default class Body extends Component {
	render () {
		return (
				<div className="body">
				<p><ProfilePic /></p>
				<p>Hi! My name is Robert, and this is just a little site to explain a litle about who I am.
				I hail from <a href="http://grcity.us/Pages/default.aspx">Grand Rapids Michigan</a></p>
				<p>I am a novice programmar who has rudimentary knowledge of C++, Java, and HTML.
				I hope to learn how to program to start a carreer in software development.
				It is so cool to be able to simply type an amount of text into a document, and manipulate values in variables and create a complex and responsive application.</p>
				<p>I am about to graduate from Cornerstone University with a degree and music. This is one of my passions and I hoep to one day lead worship in a church full time.</p>
				<footer className="footer">
				<button className="github-button">
					<a href="https://github.com/VanderPloegR1"></a>
				</button>
				
				<button className="facebook-button">
				</button>
				
				<button className="youtube-button">
				</button>
				
				<button className="linkedin-button">
				</button>
				</footer>
				</div>
			);
	}
}