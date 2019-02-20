import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import SongInfo from './components/SongInfo';
import MusicButtons from './components/MusicButtons';
import MusicSettings from './components/MusicSettings';
import { styles } from './styles'
import ProgressBar from '../common/ProgressBar';


class MusicController extends Component {
  render() {
    const { classes, store } = this.props;
    const { artistName, trackName, trackImage, duration, position, isPlaying, onClickPlay } = store

    return (
      <AppBar position='sticky' className={classes.appBar}>
        <ProgressBar position={position} duration={duration} />
        <Toolbar className={classes.toolbar}>
          <SongInfo artistName={artistName} trackName={trackName} imageUrl={trackImage} />
          <MusicButtons isPlaying={isPlaying} duration={duration} onClickPlay={onClickPlay} />
          <MusicSettings />
        </Toolbar>
      </AppBar>
    );
  }
}

export default withStyles(styles)(inject('store')(observer(MusicController)));