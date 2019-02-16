import axios from 'axios';

export async function getUserEvents(userId) {
    const result = await axios.post('eventify/getUserEvents', { user_id: userId });
    return result.data;
}