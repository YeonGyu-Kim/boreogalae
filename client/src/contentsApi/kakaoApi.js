import axios from "axios";

export const kakaoApi = {
  kakaoMe: (access_token) =>
    axios({
      url: "https://kapi.kakao.com/v2/user/me",
      method: "GET",
      headers: {
        Authorization: `Bearer ${access_token}`,
        "Content-type": "application/x-www-form-urlencoded;charset=utf-8",
      },
    }).then((response) => {
      return response.data;
    }),
};
