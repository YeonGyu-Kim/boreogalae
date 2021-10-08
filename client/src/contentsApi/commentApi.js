import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:8080/",
});

export const userComment = {
  createComment: async (text, contentsId) =>
    await api
      .post("comments", {
        text: JSON.stringify(text),
        contentsId,
      })
      .then((response) => {
        return response.data;
      }),

  createReply: async (text, contentsId, parentId) =>
    await api
      .post("comments/reply", {
        text: JSON.stringify(text),
        contentsId,
        parentId,
      })
      .then((response) => {
        return response.data;
      }),

  getComment: async () =>
    await api.get("comments").then((response) => {
      return response.data;
    }),

  updateComment: async (id, text) =>
    await api
      .put(`comments/${id}`, {
        text: JSON.stringify(text),
      })
      .then((response) => {
        return response.data;
      }),

  voteComment: async (id, count) =>
    await api
      .put(`comments/${id}/count`, {
        voteCount: count,
      })
      .then((response) => {
        return response.data;
      }),

  deleteComment: async (id) =>
    await api.delete(`comments/${id}`).then((response) => {
      return response.data;
    }),
};
