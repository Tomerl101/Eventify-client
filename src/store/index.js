import { decorate, observable, action } from "mobx";
import { getUserInfo as getUserInfoServer } from '../server/getUserInfo';
import { getUserEvents as getUserEventsServer } from '../server/getUserEvents';

class Store {

  accessToken = '';
  userId = '';
  userName = 'Tomer';
  userImage = '';
  trackName = 'Eye of the Tiger';
  trackDuration = '';
  trackImage = '';
  trackAuthor = 'James Bond';
  trackCurrentTime = '';
  eventsList = [];
  playlistList = [];
  tracksList = [];
  isLoading = false;

  //music player
  player = null;

  checkForPlayer(player) {
    this.player = 8;
    // if (window.Spotify !== null) {
    //   this.player = new window.Spotify.Player({
    //     name: "Eventify",
    //     getOAuthToken: cb => { cb(this.accessToken); },
    //   });
    //   this.player.on('ready', data => {
    //     console.log('Ready with Device ID', data.device_id);
    //   });
    //   this.player.connect();
    // }
    this.player = player;
  }

  togglePlay() {
    // console.log('togglePlay->player', this.player);
    console.log('play');
    console.log(this.player);
  }

  setIsLoading(isLoading) {
    this.isLoading = isLoading;
  }

  setAccessToken(accessToken) {
    this.accessToken = accessToken;
  }

  setUserId(userId) {
    this.userId = userId;
  }

  setUserImage(userImage) {
    this.userImage = userImage[0].url;
  }

  setUserName(userName) {
    this.userName = userName;
  }

  setEventsList(events) {
    this.eventsList = events;
  }

  async getUserInfo() {
    this.setIsLoading(true);
    const result = await getUserInfoServer();
    this.setUserId(result.id);
    this.setUserImage(result.images);
    this.setUserName(result.display_name);
    this.setIsLoading(false);
  }

  async getUserEvents() {
    this.setIsLoading(true);
    const result = await getUserEventsServer(this.userId);
    this.setEventsList(result.events);
    this.setIsLoading(false);
  }

  // async getUserEvents(){
  //   const result = await getUserEventsApi();
  //   this.eventsList = result.eventList
  // }


  // getEvents();
  // getUserEventPlaylists();
  // createEvent();
  // getUserPlaylists();

  // playTrack();
  // skipTrack();
  // previusTrack();


}

decorate(Store, {
  // player: observable,
  accessToken: observable,
  userName: observable,
  userImage: observable,
  trackName: observable,
  trackDuration: observable,
  trackImage: observable,
  trackAuthor: observable,
  trackCurrentTime: observable,
  eventsList: observable,
  playlistList: observable,
  tracksList: observable,
  isLoading: observable,
  setAccessToken: action,
  setUserId: action,
  setUserImage: action,
  setUserName: action,
  getUserInfo: action,
  getUserevents: action,
  setIsLoading: action,
  setEventsList: action,
  // setMusicPlayer: action
})

export const store = new Store()