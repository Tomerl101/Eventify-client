import axios from 'axios';

export async function getPlaylistTracks(playlistId) {
    const result = await axios.post('eventify/getPlaylistById', { playlist_id: playlistId });
    return result.data;
}