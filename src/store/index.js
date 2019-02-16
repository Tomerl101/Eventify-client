import { decorate, observable } from "mobx"

class Store {

  accessToken = '';
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


  // getEvents();
  // getEventPlaylists();
  // createEvent();
  // getUserPlaylists();

  // playTrack();
  // skipTrack();
  // previusTrack();


}

decorate(Store, {
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
})

export const store = new Store()