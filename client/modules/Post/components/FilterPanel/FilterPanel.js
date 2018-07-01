import React, { PropTypes, Component } from 'react';
import {Button} from 'material-ui';
import { Link } from 'react-router';

import styles from './FilterPanel.css';

export default class FilterPanel extends Component {
	render() {
		return(
			<span className={styles[".filter"]}>
				<Button variant="raised" color="primary" >
					<Link to="/">
						Debates
					</Link>
				</Button>
				<Button variant="raised" color="primary" >
					<Link to="/polls">
						Polls
					</Link>
				</Button>
			</span>
		)
	}
}
