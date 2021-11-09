import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:8080/",
});

export const userNotice = {
  createNotice: async (content, title) =>
    await api
      .post("notice", {
        content: JSON.stringify(content),
        title: JSON.stringify(title),
      })
      .then((response) => {
        return response.data;
      }),

  getNotice: async () =>
    await api.get("notice").then((response) => {
      return response.data;
    }),
};
