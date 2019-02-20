import { decorate, observable, action } from "mobx";
import { getUserInfo as getUserInfoServer } from '../server/getUserInfo';
import { getUserEvents as getUserEventsServer } from '../server/getUserEvents';
import { getEventPlaylists as getEventPlaylistsServer } from '../server/getEventPlaylists';
import { getPlaylistTracks as getPlaylistTracksServer } from '../server/getPlaylistTracks';
import { deleteEvent as deleteEventServer } from '../server/deleteEvent';
import { createEvent as createEventServer } from '../server/createEvent';
import { transferPlayback } from '../api/transferPlayback';

class Store {

  accessToken = '';
  deviceId = '';
  userId = '';
  userName = '';
  userImage = '';
  trackName = '';
  trackImage = '';
  artistName = '';
  albumName = '';
  duration = 0;
  position = 0;
  eventsList = [];
  playlistsList = [];
  tracksList = [];
  trackUri;
  playlistUri;
  isModalAddEventOpen = false;
  isLoading = false;
  isPlaying = false;
  isPopUpOpen = false;
  player = '';

  //FORM INPUTS
  inputs = observable({
    inputPlaylistsUri: [],
    inputEventImg: '',
    inputEventName: '',
    inputEventDescription: ''
  })

  onChangeInputs(key, value) {
    this.inputs[key] = value;
  }
  setIsLoading(isLoading) {
    this.isLoading = isLoading;
  }

  setIsModalAddEventOpen(isOpen) {
    this.isModalAddEventOpen = isOpen;
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

  onClickPlay() {
    this.player.togglePlay();
  }

  onClickNext() {
    this.player.nextTrack();
  }

  onClickPrev() {
    this.player.previousTrack();
  }

  setIsPopUpOpen(isOpen) {
    this.isPopUpOpen = isOpen;
  }

  setPlayer(player) {
    this.player = player
  }


  createEventHandlers() {
    this.player.on('initialization_error', e => { console.error(e); });
    this.player.on('authentication_error', e => { console.error(e); })
    this.player.on('account_error', e => { console.error(e); });
    this.player.on('playback_error', e => { console.error(e); });
    this.player.on('player_state_changed', state => this.onPlayerStateChanged(state));
    this.player.on('ready', data => {
      console.log('Eventify device is ready to play!');
      let { device_id } = data;
      this.deviceId = device_id;
      transferPlayback(device_id, this.accessToken);
    });
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

  async deleteEvent(eventId) {
    this.setIsLoading(true);
    await deleteEventServer(eventId, this.userId);
    this.setIsPopUpOpen(true);
    this.setIsLoading(false);
  }

  async createEvent() {
    this.setIsLoading(true);
    await createEventServer(this.inputs, this.userId);
    await this.getUserEvents();
    this.setIsLoading(false);
  }

  onPlayerStateChanged(state) {
    console.log(state);
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
      this.duration = duration;
      this.position = position
      this.trackName = trackName;
      this.albumName = albumName;
      this.artistName = artistName;
      this.trackImage = imageUrl;
      this.isPlaying = playing;
    }
  }
}

decorate(Store, {
  accessToken: observable,
  userName: observable,
  userImage: observable,
  trackName: observable,
  artistName: observable,
  albumName: observable,
  trackImage: observable,
  duration: observable,
  position: observable,
  eventsList: observable,
  playlistList: observable,
  tracksList: observable,
  isLoading: observable,
  isPlaying: observable,
  isPopUpOpen: observable,
  player: observable,
  isModalAddEventOpen: observable,
  // inputPlaylistsUri: observable,
  // inputEventImg: observable,
  // inputEventName: observable,
  // inputEventDescription: observable,
  setAccessToken: action.bound,
  setUserId: action.bound,
  setUserImage: action.bound,
  setUserName: action.bound,
  getUserInfo: action.bound,
  getUserevents: action.bound,
  setIsLoading: action.bound,
  setIsModalAddEventOpen: action.bound,
  setEventsList: action.bound,
  onStateChanged: action.bound,
  setPlayer: action.bound,
  onClickPlay: action.bound,
  onClickNext: action.bound,
  onClickPrev: action.bound,
  onPlayerStateChanged: action.bound,
  setIsPopUpOpen: action.bound,
  onChangeInputs: action.bound,
  createEvent: action.bound,
})

export const store = new Store()