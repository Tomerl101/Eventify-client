import axios from 'axios';

export async function createEvent(inputs, userId) {
    const event_id = 123;
    const user_id = userId;
    const { inputEventImg: event_img,
        inputEventDescription: description,
        inputEventName: event_name,
    } = inputs;
    console.log(event_name);
    const playlists_id = inputs.inputPlaylistsUri.split(',');
    const result = await axios.post('eventify/createEvent', { event_id, user_id, event_name, description, event_img, playlists_id });
    return result.data;
}