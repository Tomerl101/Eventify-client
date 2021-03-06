import axios from 'axios';

export async function getEventPlaylists(eventId) {
    const result = await axios.post('eventify/getEventPlaylists', { event_id: eventId });
    return result.data;
}