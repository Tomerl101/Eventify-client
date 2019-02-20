import axios from 'axios';

export async function deleteEvent(eventId, userId) {
  const result = await axios.post('eventify/deleteEventById', { event_id: eventId, user_id: userId });
  return result.data;
}