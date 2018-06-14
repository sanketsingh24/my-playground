import React, { PropTypes, Component } from 'react';
import {Typography, List, ListItem, ListItemText} from 'material-ui';

function generate(element) {
  return [0, 1, 2].map(value =>
    React.cloneElement(element, {
      key: value,
    }),
  );
}

export default class TrendingPanel extends Component {
	render() {
		return(
			<div>
				<Typography variant="title">
					Text only
				</Typography>
				<div>
					<List dense={false}>
						{generate(
							<ListItem>
								<ListItemText
									primary="Single-line item"
									secondary={true ? 'Secondary text' : null}
								/>
							</ListItem>,
						)}
					</List>
				</div>
			</div>
		)
	}
}
