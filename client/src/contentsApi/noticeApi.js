import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:8080/",
});

export const userNotice = {
  createNotice: async (text, contentsId) =>
    await api
      .post("notice", {
        text: JSON.stringify(text),
      })
      .then((response) => {
        return response.data;
      }),

  getNotice: async () =>
    await api.get("notice").then((response) => {
      return response.data;
    }),
};
