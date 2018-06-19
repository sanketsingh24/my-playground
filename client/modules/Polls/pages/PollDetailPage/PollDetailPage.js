import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import { FormattedMessage } from 'react-intl';

// Import Style
import styles from '../../components/PollListItem/PollListItem.css';

// Import Actions
import { fetchPoll } from '../../PollsActions';

// Import Selectors
import { getPoll } from '../../PollsReducer';

export function PollDetailPage(props) {
  return (
    <div>
      <Helmet title={props.Poll.title} />
      <div className={`${styles['single-Poll']} ${styles['Poll-detail']}`}>
        <h3 className={styles['Poll-title']}>{props.Poll.title}</h3>
        <p className={styles['author-name']}><FormattedMessage id="by" /> {props.Poll.name}</p>
        <p className={styles['Poll-desc']}>{props.Poll.content}</p>
      </div>
    </div>
  );
}

// Actions required to provide data for this component to render in server side.
PollDetailPage.need = [params => {
  return fetchPoll(params.cuid);
}];

// Retrieve data from store as props
function mapStateToProps(state, props) {
  return {
    Poll: getPoll(state, props.params.cuid),
  };
}

PollDetailPage.propTypes = {
  Poll: PropTypes.shape({
    name: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    slug: PropTypes.string.isRequired,
    cuid: PropTypes.string.isRequired,
  }).isRequired,
};

export default connect(mapStateToProps)(PollDetailPage);
