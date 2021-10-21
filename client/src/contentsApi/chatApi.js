import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:8080/",
});

export const userChat = {
  getChat: async (roomId) =>
    await api.get(`chat/room/${roomId}`).then((response) => {
      return response.data;
    }),

  createChat: async (text, userId, roomId, nickname, url, currentId) =>
    await api
      .post(`chat/room/user/${userId}`, {
        text: JSON.stringify(text),
        roomId,
        nickname: JSON.stringify(nickname),
        url: JSON.stringify(url),
        currentId,
      })
      .then((response) => {
        return response.data;
      }),
  deleteRoom: async (roomId) =>
    await api.delete(`/chat/room/${roomId}`, {}).then((response) => {
      return response.data;
    }),
};

export const userRoom = {
  getRoom: async () =>
    await api.get("room").then((response) => {
      return response.data;
    }),
  createRoom: async (title, nickname, url) =>
    api
      .post(`room`, {
        title: JSON.stringify(title),
        nickname: JSON.stringify(nickname),
        url: JSON.stringify(url),
      })
      .then((response) => {
        return response.data;
      }),
  deleteRoom: async (id) =>
    await api.delete(`/room/${id}`, {}).then((response) => {
      return response.data;
    }),
};
