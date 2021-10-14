import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:8080/",
});

export const userChat = {
  getChat: async (roomId) =>
    await api.get(roomId && `chat/room/${roomId}`).then((response) => {
      return response.data;
    }),

  createChat: async (text, userId, roomId, nickname) =>
    await api
      .post(userId && `chat/room/user/${userId}`, {
        text: JSON.stringify(text),
        userId,
        roomId,
        nickname,
      })
      .then((response) => {
        return response.data;
      }),
  deleteRoom: async (roomId) =>
    await api
      .delete(`/chat/room/${roomId}`, {
        roomId,
      })
      .then((response) => {
        return response.data;
      }),
};

export const userRoom = {
  getRoom: async () =>
    await api.get("room").then((response) => {
      return response.data;
    }),
  createRoom: async (title, roomId) =>
    api
      .post(`room/${roomId}`, {
        title: JSON.stringify(title),
        max: 2,
      })
      .then((response) => {
        return response.data;
      }),
};
