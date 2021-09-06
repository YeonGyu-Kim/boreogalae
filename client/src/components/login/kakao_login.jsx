import axios from "axios";
import React, { memo, PureComponent, useEffect, useState } from "react";
import { useHistory, useLocation } from "react-router-dom";
import { kakaoApi } from "../../contentsApi/kakaoApi";
import UserProfile from "./user_profile";

const { Kakao } = window;

const KakaoLogin = () => {
  const [isLogin, setIsLogin] = useState();

  // 카카오
  const [user, setUser] = useState([]);

  const kakaoLogin = () => {
    try {
      return new Promise((resolve, reject) => {
        if (!Kakao) {
          reject("Kakao 인스턴스가 존재하지 않습니다.");
        }
        Kakao.Auth.login({
          success: (auth) => {
            console.log("정상적으로 로그인 되었습니다.", auth);
            Kakao.API.request({
              url: "/v2/user/me",
              success: function ({ kakao_account, id }) {
                const { profile } = kakao_account;
                console.log(id);
                console.log(kakao_account);
                console.log(profile.nickname);
                console.log(`responsed img: ${profile.profile_image_url}`);

                // 수집한 사용자 정보로 페이지를 수정하기 위해 setState

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
                    console.log(res.data);
                    // history.push("/main/feed");
                  })
                  .catch((error) => {
                    // console.log(error);
                    console.error(error);
                    alert("카카오 로그인 에러?");
                  });
              },
              fail: function (error) {
                console.log(error);
              },
            });
            setIsLogin(true);
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
        console.log("로그아웃 되었습니다.", Kakao.Auth.getAccessToken());
        localStorage.clear();
      });
      setIsLogin(false);
    }
  };

  useEffect(() => {
    window.Kakao.init("20b3d9184fb17952663854add7622a66");
    if (window.Kakao.Auth.getAccessToken()) {
      console.log("엑세스 토큰이 존재합니다. 세션을 유지합니다.");
      setIsLogin(true);
    }
  }, []);

  /*
   useEffect(() => {
    kakaoApi
      .kakaoMe(window.location.search.split("=")[1])
      .then((me) => setUser(me));
  }, [kakaoApi]);

  */

  /*
  useEffect(() => {
    Kakao.Auth.login({
      success: (auth) => {
        Kakao.Auth.setAccessToken(window.location.search.split("=")[1]);
        Kakao.API.request({
          url: "/v2/user/me",
          data: {
            propery_keys: ["properties"],
          },
          success: function (response) {
            console.log(response);
          },
          fail: function (error) {
            console.log(error);
          },
        });
      },
    });
  }, []);
 */

  /*
   <div onClick={kakaoLogin}>
        카카오 로그인{!isLogin && console.log("not yet")}
      </div>
      <div onClick={kakaoLogout}>로그아웃</div>
      
       */

  /*
   <a
          href={`https://kauth.kakao.com/oauth/authorize?response_type=code&client_id=122827d5a2d98f94f483c48aab2549a9&redirect_uri=http://localhost:8080/auth/kakao/callback`}
        >
          로그인
        </a>

   */
  return (
    <>
      <div onClick={kakaoLogin}>로그인</div>

      <div>
        <div onClick={kakaoLogout}>로그아웃</div>
      </div>
    </>
  );
};

export default KakaoLogin;
