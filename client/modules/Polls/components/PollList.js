import React, { PropTypes } from 'react';

// Import Components
import PollListItem from './PollListItem/PollListItem';

function PollList(props) {
  return (
    <div className="listView">
      {
        props.Polls.map(Poll => (
          <PollListItem
            Poll={Poll}
            key={Poll.cuid}
            onDelete={() => props.handleDeletePoll(Poll.cuid)}
          />
        ))
      }
    </div>
  );
}

PollList.propTypes = {
  Polls: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    slug: PropTypes.string.isRequired,
    cuid: PropTypes.string.isRequired,
  })).isRequired,
  handleDeletePoll: PropTypes.func.isRequired,
};

export default PollList;
