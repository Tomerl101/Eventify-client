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


  state = {
    error: "",
    trackName: "Track Name",
    artistName: "Artist Name",
    albumName: "Album Name",
    imageUrl: "https://i.scdn.co/image/487b36ef4a9b81ecfde2a9c9ac7d15f05e23b9f9",
    playing: false,
    position: 0,
    duration: 0,
  };

  onStateChanged(state) {
    console.log(state);
    // if we're no longer listening to music, we'll get a null state.
    if (state !== null) {
      const {
        current_track: currentTrack,
        position,
        duration,
      } = state.track_window;
      const { url: imageUrl } = state.track_window.current_track.album.images[0];
      const trackName = currentTrack.name;
      const albumName = currentTrack.album.name;
      const artistName = currentTrack.artists
        .map(artist => artist.name)
        .join(", ");
      const playing = !state.paused;
      this.setState({
        position,
        duration,
        trackName,
        albumName,
        artistName,
        imageUrl,
        playing
      });
    }
  }

  checkForPlayer(accessToken) {
    if (window.Spotify !== null) {
      clearInterval(this.playerCheckInterval);
      this.player = new window.Spotify.Player({
        name: "Eventify",
        getOAuthToken: cb => { cb(accessToken); },
      });
      this.createEventHandlers();

      this.player.connect();
    }
  }

  initSpotifyPlayer(accessToken) {
    if (accessToken !== "") {
      this.playerCheckInterval = setInterval(() => this.checkForPlayer(accessToken), 1000);
    }
  }

  createEventHandlers() {
    this.player.on('initialization_error', e => { console.error(e); });
    this.player.on('authentication_error', e => { console.error(e); })
    this.player.on('account_error', e => { console.error(e); });
    this.player.on('playback_error', e => { console.error(e); });
    this.player.on('player_state_changed', state => this.onStateChanged(state));
    this.player.on('ready', data => {
      console.log('Eventify device is ready to play!');
      // let { device_id } = data;
    });
  }

  onClickPlay = () => {
    this.player.togglePlay();
  }

  async componentDidMount() {
    const { accessToken } = this.props.store;
    console.log('TCL: MusicButtons -> componentDidMount -> accessToken', accessToken)
    this.initSpotifyPlayer(accessToken);
  }

  render() {
    const { classes } = this.props;
    const {
      token,
      loggedIn,
      artistName,
      trackName,
      albumName,
      imageUrl,
      error,
      position,
      duration,
      playing,
    } = this.state;
    return (
      <AppBar position='sticky' className={classes.appBar}>
        <ProgressBar position={position} duration={duration} />
        <Toolbar className={classes.toolbar}>
          <SongInfo artistName={artistName} trackName={trackName} imageUrl={imageUrl} />
          <MusicButtons isPlaying={playing} duration={duration} onClickPlay={this.onClickPlay} />
          <MusicSettings />
        </Toolbar>
      </AppBar>
    );
  }
}

export default withStyles(styles)(inject('store')(observer(MusicController)));