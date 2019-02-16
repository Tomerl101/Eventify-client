import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import SongInfo from './components/SongInfo';
import MusicButtons from './components/MusicButtons';
import MusicSettings from './components/MusicSettings';
import { styles } from './styles'


function MusicController(props) {
  const { classes } = props;
  return (
    <AppBar position='sticky' className={classes.appBar}>
      <Toolbar className={classes.toolbar}>
        <SongInfo />
        <MusicButtons />
        <MusicSettings />
      </Toolbar>
    </AppBar>
  );
}

export default withStyles(styles)(MusicController);