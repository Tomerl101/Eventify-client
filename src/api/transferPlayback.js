export const transferPlayback = (deviceId, token) => {
  fetch("https://api.spotify.com/v1/me/player", {
    method: "PUT",
    headers: {
      authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      "device_ids": [deviceId],
      "play": true,
    }),
  });
}