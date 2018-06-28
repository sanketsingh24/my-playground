import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

// Import Style
import styles from './EditProfile.css';

class EditProfile extends Component {
  render() {
    return (
      <div/>
    );
  }
}

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

EditProfile.propTypes = {
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EditProfile);
