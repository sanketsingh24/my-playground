import React, { Component, PropTypes } from 'react';
import { injectIntl, intlShape, FormattedMessage } from 'react-intl';

// Import Style
import styles from './PollCreateWidget.css';

export class PollCreateWidget extends Component {
  addPoll = () => {
    const nameRef = this.refs.name;
    const titleRef = this.refs.title;
    const contentRef = this.refs.content;
    if (nameRef.value && titleRef.value && contentRef.value) {
      this.props.addPoll(nameRef.value, titleRef.value, contentRef.value);
      nameRef.value = titleRef.value = contentRef.value = '';
    }
  };

  render() {
    const cls = `${styles.form} ${(this.props.showAddPoll ? styles.appear : '')}`;
    return (
      <div className={cls}>
        <div className={styles['form-content']}>
          <h2 className={styles['form-title']}><FormattedMessage id="createNewPoll" /></h2>
          <input placeholder={this.props.intl.messages.authorName} className={styles['form-field']} ref="name" />
          <input placeholder={this.props.intl.messages.PollTitle} className={styles['form-field']} ref="title" />
          <textarea placeholder={this.props.intl.messages.PollContent} className={styles['form-field']} ref="content" />
          <a className={styles['Poll-submit-button']} href="#" onClick={this.addPoll}><FormattedMessage id="submit" /></a>
        </div>
      </div>
    );
  }
}

PollCreateWidget.propTypes = {
  addPoll: PropTypes.func.isRequired,
  showAddPoll: PropTypes.bool.isRequired,
  intl: intlShape.isRequired,
};

export default injectIntl(PollCreateWidget);
