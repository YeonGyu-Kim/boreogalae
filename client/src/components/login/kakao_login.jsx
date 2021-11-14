import axios from "axios";
import React, { memo, useEffect, useState } from "react";
import { kakaoApi } from "../../contentsApi/kakaoApi";
import TokenStorage from "../../db/token";
import styled from "styled-components";

const { Kakao } = window;
const tokenStorage = new TokenStorage();
export let currentUserId;

const Profile = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Image = styled.img`
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 50%;
  margin-bottom: 0.5rem;
`;

const Log = styled.div`
  cursor: pointer;
`;

const KakaoLogin = () => {
  const [isLogin, setIsLogin] = useState(false);

  // 카카오
  const [user, setUser] = useState([]);
  const [image, setImage] = useState();

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
                    headers: {
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
                    setImage(res.data.url);
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
      <Profile onClick={kakaoLogin}>
        {isLogin === false && <Log>로그인</Log>}
        {isLogin === true && image ? (
          <Image src={image} />
        ) : isLogin === true && user.url ? (
          <Image src={user.url} />
        ) : null}
        <Log onClick={kakaoLogout}>{isLogin === true && "로그아웃"}</Log>
      </Profile>
    </section>
  );
};

export default KakaoLogin;
