import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import { FormattedMessage } from 'react-intl';

// Import Style
import styles from './PollListItem.css';

function PollListItem(props) {
  return (
    <div className={styles['single-Poll']}>
      <h3 className={styles['Poll-title']}>
        <Link to={`/Polls/${props.Poll.slug}-${props.Poll.cuid}`} >
          {props.Poll.title}
        </Link>
      </h3>
      <p className={styles['author-name']}><FormattedMessage id="by" /> {props.Poll.name}</p>
      <p className={styles['Poll-desc']}>{props.Poll.content}</p>
      <p className={styles['Poll-action']}><a href="#" onClick={props.onDelete}><FormattedMessage id="deletePoll" /></a></p>
      <hr className={styles.divider} />
    </div>
  );
}

PollListItem.propTypes = {
  Poll: PropTypes.shape({
    name: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    slug: PropTypes.string.isRequired,
    cuid: PropTypes.string.isRequired,
  }).isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default PollListItem;
