import React, { Component } from 'react';
import { configure } from "mobx";
import { MuiThemeProvider } from '@material-ui/core/styles';
import axios from 'axios';
import { theme } from './theme';
import NavBar from './components/NavBar';
import Tabs from './components/Tabs';
import MainScreen from './components/MainScreen';
import MusicController from './components/MusicController';
import { Provider } from 'mobx-react';
import { store } from './store';
import { parseTokenFromUrl } from './utils/parseToken';
import 'typeface-roboto';

//force strict 
// configure({ enforceActions: 'observed' });
axios.defaults.baseURL = 'http://localhost:8080/';

class App extends Component {

  componentWillMount() {
    const accessToken = parseTokenFromUrl();
    console.log(accessToken);
    if (!accessToken) {
      window.location.href = 'http://localhost:8080';
    };
  }

  async componentDidMount() {
    const accessToken = parseTokenFromUrl();
    if (accessToken) {
      store.setAccessToken(accessToken);
      axios.defaults.headers.common['Authorization'] = `Bearer ${store.accessToken}`
    }

    window.onSpotifyWebPlaybackSDKReady = () => {
      this.player = new window.Spotify.Player({
        name: 'Eventify Player',
        getOAuthToken: cb => { cb(accessToken); }
      });

      this.player.addListener('player_state_changed', state => { console.log(state); });

      // Ready
      this.player.on('ready', data => {
        console.log('Ready with Device ID', data.device_id);
        this.player.togglePlay();
      });
      this.player.connect();
      store.setMusicPlayer(this.player)
      store.checkForPlayer();
    }

    await store.getUserInfo();
    await store.getUserEvents();
  }

  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <Provider store={store}>
          <>
            <NavBar />
            <Tabs />
            <MainScreen />
            <MusicController />
          </>
        </Provider>
      </MuiThemeProvider>
    );
  }
}

export default App;
