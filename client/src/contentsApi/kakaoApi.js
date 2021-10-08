import axios from "axios";

export const kakaoApi = {
  kakaoMe: async () =>
    await axios.get("http://localhost:8080/auth/me").then((response) => {
      return response.data;
    }),
};
