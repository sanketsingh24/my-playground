import React, { PropTypes, Component } from 'react';
import {Button} from 'material-ui';

export default class FilterPanel extends Component {
	render() {
		return(
			<div>
				<Button variant="raised" color="primary" >
					Debates
				</Button>
				<Button variant="raised" color="primary" >
					Polls
				</Button>
			</div>
		)
	}
}
