import { decorate, observable, action } from "mobx";
import { getUserInfo as getUserInfoApi } from '../api/getUserInfo';

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

  setAccessToken(accessToken) {
    this.accessToken = accessToken;
  }

  setUserId(userId) {
    this.userId = userId;
  }

  async getUserInfo() {
    const { id } = await getUserInfoApi();
    this.setUserId(id);
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
})

export const store = new Store()