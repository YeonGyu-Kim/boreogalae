import axios from "axios";

export const kakaoApi = {
  kakaoMe: async () =>
    await axios.get("http://localhost:8080/auth/me").then((response) => {
      return response.data;
    }),
  /*
  createUser: async (user) =>
    await axios
      .post("http://localhost:8080/auth/user", {
        headers: {
          "Access-Control-Allow-Origin": "*",
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        user: JSON.stringify(user),
      })
      .then((response) => {
        return response.data;
      }),
 */
};
