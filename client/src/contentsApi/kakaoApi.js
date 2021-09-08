import axios from "axios";

export const kakaoApi = {
  kakaoMe: () =>
    axios({
      url: "http://localhost:8080/auth/me",
      method: "GET",
    }).then((response) => {
      return response.data;
    }),
};
