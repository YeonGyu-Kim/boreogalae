import axios from "axios";
import React, { memo, PureComponent, useEffect, useState } from "react";
import { useHistory, useLocation } from "react-router-dom";
import { kakaoApi } from "../../contentsApi/kakaoApi";
import TokenStorage from "../../db/token";

const { Kakao } = window;
const tokenStorage = new TokenStorage();

const KakaoLogin = () => {
  const [isLogin, setIsLogin] = useState(false);

  // 카카오
  const [user, setUser] = useState([]);
  const [nickname, setNickname] = useState();

  const kakaoLogin = () => {
    try {
      return new Promise((resolve, reject) => {
        if (!Kakao) {
          reject("Kakao 인스턴스가 존재하지 않습니다.");
        }
        Kakao.Auth.login({
          success: (auth) => {
            localStorage.setItem("token", auth);
            console.log("정상적으로 로그인 되었습니다.", auth.access_token);
            setIsLogin(true);
            tokenStorage.saveToken(auth.access_token);

            Kakao.API.request({
              url: "/v2/user/me",
              success: function ({ kakao_account, id }) {
                const { profile } = kakao_account;

                axios
                  .post("http://localhost:8080/auth/user", {
                    header: {
                      "Access-Control-Allow-Origin": "*",
                      Accept: "application/json",
                      "Content-Type": "application/json",
                    },
                    data: {
                      id: id,
                      nickname: profile.nickname,
                      image: profile.profile_image_url,
                    },
                    responseType: "json",
                  })
                  .then((res) => {
                    setNickname(res.data.nickname);
                  })
                  .catch((error) => {
                    console.error(error);
                    alert("카카오 로그인 에러?");
                  });
              },
              fail: function (error) {
                console.log(error);
              },
            });
          },
          fail: (error) => {
            console.log(error);
          },
        });
      });
    } catch (error) {
      console.log(error);
    }
  };

  const kakaoLogout = () => {
    if (Kakao.Auth.getAccessToken()) {
      console.log(
        "카카오 인증 액세스 토큰이 존재합니다.",
        Kakao.Auth.getAccessToken()
      );
      Kakao.Auth.logout(() => {
        alert(
          "https://accounts.kakao.com/weblogin/account/info 에서 로그아웃 하고 다시 눌러주세요."
        );
        console.log("로그아웃 되었습니다.", Kakao.Auth.getAccessToken());
        setIsLogin(false);
      });
      sessionStorage.clear();
    }
  };

  useEffect(() => {
    window.Kakao.init("20b3d9184fb17952663854add7622a66");
    if (window.Kakao.Auth.getAccessToken()) {
      console.log("엑세스 토큰이 존재합니다. 세션을 유지합니다.");
      setIsLogin(true);
    }
  }, []);

  useEffect(() => {
    kakaoApi.kakaoMe().then((me) => setUser(me));
  }, [kakaoApi]);

  return (
    <section>
      <div onClick={kakaoLogin}>
        {isLogin === false && "로그인"}
        <div>{isLogin === true && (nickname || user.nickname)}</div>
        <div onClick={kakaoLogout}>{isLogin === true && "로그아웃"}</div>
      </div>
    </section>
  );
};

export default KakaoLogin;
