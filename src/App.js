import React, { Component } from 'react';
import axios from 'axios';
import { MuiThemeProvider } from '@material-ui/core/styles';
import { theme } from './theme';
import NavBar from './components/NavBar';
import Tabs from './components/Tabs';
import MainScreen from './components/MainScreen';
import MusicController from './components/MusicController';
import 'typeface-roboto';
import { Provider } from 'mobx-react';
import { store } from './store';
import queryString from 'query-string';
import { configure } from "mobx";

//force strict 
configure({ enforceActions: 'observed' });

axios.defaults.baseURL = 'http://localhost:8080/';

class App extends Component {

  componentWillMount() {
    let parsed = queryString.parse(window.location.search);
    let accessToken = parsed.access_token;

    if (!accessToken) {
      window.location.href = 'http://localhost:8080';
    };
    return;
  }

  componentDidMount() {
    let parsed = queryString.parse(window.location.search);
    let accessToken = parsed.access_token;
    if (accessToken) {
      store.setAccessToken(accessToken);
      axios.defaults.headers.common['Authorization'] = `Bearer ${store.accessToken}`
    }

    store.getUserInfo();
    window.onSpotifyWebPlaybackSDKReady = () => {
      const token = accessToken;

      console.log('TCL: App -> window.onSpotifyWebPlaybackSDKReady -> token', token)
      const player = new window.Spotify.Player({
        name: 'Web Playback SDK Quick Start Player',
        getOAuthToken: cb => { cb(token); }
      });

      // Ready
      player.on('ready', data => {
        console.log('Ready with Device ID', data.device_id);
      });
      player.connect();
    }
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
