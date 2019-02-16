import React, { Component } from 'react';
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
// configure({ enforceActions: 'observed' });

class App extends Component {

  componentWillMount() {
    let parsed = queryString.parse(window.location.search);
    let accessToken = parsed.access_token;

    if (!accessToken) {
      window.location.href = 'http://localhost:8080';
    };
  }

  componentDidMount() {
    let parsed = queryString.parse(window.location.search);
    let accessToken = parsed.access_token;
    store.accessToken = accessToken;
    fetch('https://api.spotify.com/v1/me', {
      headers: { 'Authorization': 'Bearer ' + accessToken }
    }).then((respone) => respone.json())
      .then((data) => { store.userImage = data.images[0].url; console.log(data) });
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
