import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';

// Import Components
import PollList from '../../components/PollList';
import PollCreateWidget from '../../components/PollCreateWidget/PollCreateWidget';
import FilterPanel from '../../components/FilterPanel/FilterPanel';
import Trending from '../../components/TrendingPanel/TrendingPanel';

// Import Actions
import { addPollRequest, fetchPolls, deletePollRequest } from '../../PollsActions';
import { toggleAddPoll } from '../../../App/AppActions';

// Import Selectors
import { getShowAddPoll } from '../../../App/AppReducer';
import { getPolls } from '../../PollsReducer';

import { Grid, Paper } from 'material-ui';

class PollListPage extends Component {
  componentDidMount() {
    this.props.dispatch(fetchPolls());
  }

  handleDeletePoll = Poll => {
    if (confirm('Do you want to delete this Poll')) { // eslint-disable-line
      this.props.dispatch(deletePollRequest(Poll));
    }
  };

  handleAddPoll = (name, title, content) => {
    this.props.dispatch(toggleAddPoll());
    this.props.dispatch(addPollRequest({ name, title, content }));
  };

  render() {
    return (
      <div>
        <PollCreateWidget addPoll={this.handleAddPoll} showAddPoll={this.props.showAddPoll} />
        <Grid container spacing={24}>
          <Grid item xs={6} sm={2}>
            <FilterPanel/>
          </Grid>
          <Grid item xs={6} sm={8}>
            <PollList handleDeletePoll={this.handleDeletePoll} Polls={this.props.Polls} />
          </Grid>
          <Grid item xs={6} sm={2}>
            <Trending/>
          </Grid>
        </Grid>
      </div>
    );
  }
}

// Actions required to provide data for this component to render in sever side.
PollListPage.need = [() => { return fetchPolls(); }];

// Retrieve data from store as props
function mapStateToProps(state) {
  return {
    showAddPoll: getShowAddPoll(state),
    Polls: getPolls(state),
  };
}

PollListPage.propTypes = {
  Polls: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
  })).isRequired,
  showAddPoll: PropTypes.bool.isRequired,
  dispatch: PropTypes.func.isRequired,
};

PollListPage.contextTypes = {
  router: React.PropTypes.object,
};

export default connect(mapStateToProps)(PollListPage);
