import React, { Component } from 'react';
import { Provider } from 'mobx-react';
import { configure } from "mobx";
import axios from 'axios';
import { BrowserRouter as Router, Route } from "react-router-dom";
import { MuiThemeProvider } from '@material-ui/core/styles';
import { store } from './store';
import { theme } from './theme';
import EventsScreen from './screens/EventsScreen';
import PlaylistsScreen from './screens/PlaylistsScreen';
import MusicController from './components/MusicController';
import Tabs from './components/Tabs';
import NavBar from './components/NavBar';
import TracksScreen from './screens/TracksScreen';
import { parseTokenFromUrl } from './utils/parseToken';
import { screenTypes } from './store/screenTypes';
import 'typeface-roboto';

//force strict 
configure({ enforceActions: 'observed' });
axios.defaults.baseURL = 'http://localhost:8080/';

class App extends Component {

  componentWillMount() {
    const accessToken = parseTokenFromUrl();
    if (!accessToken) {
      window.location.href = 'http://localhost:8080';
    };
    window.location.hash = '';
    store.setAccessToken(accessToken);
    axios.defaults.headers.common['Authorization'] = `Bearer ${store.accessToken}`
  }

  async componentDidMount() {
    await store.getUserInfo();
    await store.getUserEvents();
  }

  render() {
    return (
      <Router>
        <MuiThemeProvider theme={theme}>
          <Provider store={store}>
            <>
              <NavBar />
              <Tabs />
              <Route exact path={screenTypes.SCREEN_EVENTS} component={EventsScreen} />
              <Route path={screenTypes.SCREEN_PLAYLISTS} component={PlaylistsScreen} />
              <Route path={screenTypes.SCREEN_TRACKS} component={TracksScreen} />
              <MusicController />
            </>
          </Provider>
        </MuiThemeProvider>
      </Router>
    );
  }
}

export default App;
