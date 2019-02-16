import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import { withStyles } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import MessageIcon from '@material-ui/icons/Message';
import GroupIcon from '@material-ui/icons/Group';
import Avatar from '@material-ui/core/Avatar';
import { styles } from './styles';


class NavBar extends Component {

  render() {
    const { userImage } = this.props.store;
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <AppBar>
          <Toolbar>
            <IconButton className={classes.menuButton} color="inherit" aria-label="Open drawer">
              <MenuIcon fontSize='large' />
            </IconButton>
            <Typography className={classes.title} variant="h6" color="inherit" noWrap>
              Eventify
            </Typography>
            <div className={classes.grow} />
            <div className={classes.search}>
              <div className={classes.searchIcon}>
                <SearchIcon />
              </div>
              <InputBase
                placeholder="Search…"
                classes={{
                  root: classes.inputRoot,
                  input: classes.inputInput,
                }}
              />
            </div>
            <div className={classes.grow} />
            <div className={classes.sectionDesktop}>
              <Avatar alt="Remy Sharp" src={userImage} className={classes.bigAvatar} />

              <IconButton color="inherit">
                <MessageIcon />
              </IconButton>
              <IconButton color="inherit">
                <GroupIcon />
              </IconButton>
            </div>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}
export default withStyles(styles)(inject('store')(observer(NavBar)));