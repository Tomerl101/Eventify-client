export const putPlayTrack = (deviceId, token, playlistUri, index) => {
  fetch("https://api.spotify.com/v1/me/player/play", {
    method: "PUT",
    headers: {
      authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      "device_ids": deviceId,
      "context_uri": `spotify:playlist:${playlistUri}`,
      "offset": { "position": index }
    }),
  });
}