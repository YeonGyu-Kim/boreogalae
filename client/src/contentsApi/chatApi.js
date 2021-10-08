import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:8080/",
});

export const userChat = {
  getChat: async () =>
    await api.get("chat").then((response) => {
      return response.data;
    }),
};

export const userRoom = {
  getRoom: async () =>
    await api.get("room").then((response) => {
      return response.data;
    }),
  createRoom: async () => api.post("room"),
};
