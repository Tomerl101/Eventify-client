import { decorate, observable, action } from "mobx";
import { getUserInfo as getUserInfoServer } from '../server/getUserInfo';
import { getUserEvents as getUserEventsServer } from '../server/getUserEvents';
import { getEventPlaylists as getEventPlaylistsServer } from '../server/getEventPlaylists';
import { getPlaylistTracks as getPlaylistTracksServer } from '../server/getPlaylistTracks';

class Store {

  accessToken = '';
  userId = '';
  userName = 'Tomer';
  userImage = '';
  trackName = 'Eye of the Tiger';
  trackDuration = '';
  trackImage = '';
  trackAuthor = 'James Bond';
  eventsList = [];
  playlistsList = [];
  tracksList = [];
  trackUri;
  playlistUri;
  isLoading = false;

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

  setPlaylistsList(playlists) {
    this.playlistsList = playlists;
  }

  setTracksList(tracks) {
    this.tracksList = tracks;
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

  async geEventPlaylists() {
    this.setIsLoading(true);
    const result = await getEventPlaylistsServer(this.userId);
    this.setPlaylistsList(result.events);
    this.setIsLoading(false);
  }

  async getTrackslists() {
    this.setIsLoading(true);
    const result = await getPlaylistTracksServer(this.userId);
    this.setTracksList(result.tracks);
    this.setIsLoading(false);
  }
}

decorate(Store, {
  accessToken: observable,
  userName: observable,
  userImage: observable,
  trackName: observable,
  trackDuration: observable,
  trackImage: observable,
  trackAuthor: observable,
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
})

export const store = new Store()