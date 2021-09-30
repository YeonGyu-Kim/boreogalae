import axios from "axios";

export const kakaoApi = {
  kakaoMe: async () =>
    await axios.get("http://localhost:8080/auth/me").then((response) => {
      return response.data;
    }),
};

export const userComment = {
  createComment: async (text, contentsId) =>
    await axios
      .post("http://localhost:8080/comments", {
        text: JSON.stringify(text),
        contentsId,
      })
      .then((response) => {
        return response.data;
      }),

  createReply: async (text, contentsId, parentId) =>
    await axios
      .post("http://localhost:8080/comments/reply", {
        text: JSON.stringify(text),
        contentsId,
        parentId,
      })
      .then((response) => {
        return response.data;
      }),

  getComment: async () =>
    await axios.get("http://localhost:8080/comments").then((response) => {
      return response.data;
    }),

  updateComment: async (id, text) =>
    await axios
      .put(`http://localhost:8080/comments/${id}`, {
        text: JSON.stringify(text),
      })
      .then((response) => {
        return response.data;
      }),

  voteComment: async (id, count) =>
    await axios
      .put(`http://localhost:8080/comments/${id}/count`, {
        voteCount: count,
      })
      .then((response) => {
        return response.data;
      }),

  deleteComment: async (id) =>
    await axios
      .delete(`http://localhost:8080/comments/${id}`)
      .then((response) => {
        return response.data;
      }),
};
