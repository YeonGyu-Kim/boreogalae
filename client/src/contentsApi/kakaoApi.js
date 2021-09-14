import axios from "axios";

export const kakaoApi = {
  kakaoMe: async () =>
    await axios.get("http://localhost:8080/auth/me").then((response) => {
      return response.data;
    }),
};

export const userComment = {
  createComment: async (text) =>
    await axios
      .post("http://localhost:8080/comments", {
        text: JSON.stringify(text),
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
};
