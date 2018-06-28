import React, { PropTypes, Component } from 'react';
import Login from '../components/login';
import { Link } from 'react-router';

class AboutPage extends Component {
	render() {
		return(
			<div>
				<h1>IM about</h1>
				<Login/>
			</div>
		)
	}
}

export default AboutPage;