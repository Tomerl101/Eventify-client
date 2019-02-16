import axios from 'axios';

export async function getUserInfo() {
  const result = await axios.post('eventify/getUserInfo');
  return result.data;
}