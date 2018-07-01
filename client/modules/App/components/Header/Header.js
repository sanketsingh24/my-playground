import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import { FormattedMessage } from 'react-intl';

// Import Style
import styles from './Header.css';

import { Manager, Target, Popper } from "react-popper";
import { Person, Notifications } from '@material-ui/icons';
import {
  IconButton,
  MenuItem,
  MenuList,
  Grow,
  Paper,
  ClickAwayListener,
  Hidden
} from "material-ui";

export class Header extends React.Component {
  state = {
    open: false
  };
  handleClick = () => {
    this.setState({ open: !this.state.open });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  languageNodes() { 
    this.props.intl.enabledLanguages.map(
    lang => <li key={lang} onClick={() => this.props.switchLanguage(lang)} className={lang === this.props.intl.locale ? styles.selected : ''}>{lang}</li>
  );
}

  render(){
  return (
    <div className={styles.header}>
      <div className={styles['language-switcher']}>
        <ul>
          <li><FormattedMessage id="switchLanguage" /></li>
          {this.languageNodes}
          <li>
            <Manager style={{ display: "inline-block" }}>
              <Target>
                <IconButton
                  color="inherit"
                  aria-label="Notifications"
                  aria-owns={this.state.open ? "menu-list" : null}
                  aria-haspopup="true"
                  onClick={this.handleClick}
                >
                  <Notifications/>
                  <span>5</span>
                  <Hidden mdUp>
                    <p onClick={this.handleClick}>
                      Notification
                    </p>
                  </Hidden>
                </IconButton>
              </Target>
              <Popper
                placement="bottom-start"
                eventsEnabled={this.state.open}
              >
                <ClickAwayListener onClickAway={this.handleClose}>
                  <Grow
                    in={this.state.open}
                    id="menu-list"
                    style={{ transformOrigin: "0 0 0" }}
                  >
                    <Paper>
                      <MenuList role="menu">
                        <MenuItem
                          onClick={this.handleClose}
                        >
                          Mike John responded to your email
                        </MenuItem>
                        <MenuItem
                          onClick={this.handleClose}
                        >
                          You have 5 new tasks
                        </MenuItem>
                        <MenuItem
                          onClick={this.handleClose}
                        >
                          You're now friend with Andrew
                        </MenuItem>
                        <MenuItem
                          onClick={this.handleClose}
                        >
                          Another Notification
                        </MenuItem>
                        <MenuItem
                          onClick={this.handleClose}
                        >
                          Another One
                        </MenuItem>
                      </MenuList>
                    </Paper>
                  </Grow>
                </ClickAwayListener>
              </Popper>
            </Manager>
          </li>
          <li>
            <IconButton
              color="inherit"
              aria-label="Person"
            >
              <Person />
              <Hidden mdUp>
                <p>Profile</p>
              </Hidden>
            </IconButton>
          </li>
        </ul>
      </div>
      <div className={styles.content}>
        <h1 className={styles['site-title']}>
          <Link to="/" ><FormattedMessage id="siteTitle" /></Link>
        </h1>
        {
          this.context.router.isActive('/posts', true)
            ? <a className={styles['add-post-button']} href="#" onClick={this.props.toggleAddPost}><FormattedMessage id="addPost" /></a>
            : null
        }
        {
          this.context.router.isActive('/polls', true)
            ? <a className={styles['add-pool-button']} href="#" onClick={this.props.toggleAddPoll}><FormattedMessage id="addPoll" /></a>
            : null
        }
      </div>
    </div>
  );
}
}

Header.contextTypes = {
  router: React.PropTypes.object,
};

Header.propTypes = {
  toggleAddPost: PropTypes.func.isRequired,
//  toggleAddPoll: PropTypes.func.isRequired,
  switchLanguage: PropTypes.func.isRequired,
  intl: PropTypes.object.isRequired,
};

export default Header;
