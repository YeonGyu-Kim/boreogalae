import request from "request";
import express from "express";
import axios from "axios";
import passport from "passport";
import passportKakao from "passport-kakao";
import url from "url";
import * as userRepository from "../data/auth.js";
import { db } from "../db/database.js";

/*
const router = express.Router();

const mainUrl = new URL("http://localhost:3000/movie");

const KaKaoStrategy = passportKakao.Strategy;

let token;

passport.serializeUser(function (user, done) {
  done(null, user);
});
passport.deserializeUser(function (user, done) {
  done(null, user);
});

const kakaoKey = {
  clientID: "122827d5a2d98f94f483c48aab2549a9",
  clientSecret: "",
  callbackURL: "http://localhost:8080/auth/kakao/callback",
};

passport.use(
  "kakao",
  new KaKaoStrategy(kakaoKey, (accessToken, refreshToken, profile, done) => {
    const nickname = profile._json.kakao_account.profile.nickname;
    const imageUrl = profile._json.kakao_account.profile.profile_image_url;
    const userId = profile.id;
    let user = profile;
    token = accessToken;

    console.log(nickname);
    console.log(imageUrl);
    console.log(userId);
    const sql = "INSERT INTO users(nickname, url, userId) values(?,?,?)";
    const post = [nickname, imageUrl, userId];
    db.query(sql, post, (err, results, fields) => {
      if (err) {
        console.log(err);
        done(err);
      }
    });
    done(null, user);
  })
);

router.get("/kakao/login", passport.authenticate("kakao"));

router.get("/kakao/callback", passport.authenticate("kakao"), authSuccess);

function authSuccess(req, res) {
  res.redirect(url.format(`${mainUrl.href}?access_token=${token}`));
}


export default router;
*/
let currentId;
export const login = async (req, res, next) => {
  const { data } = req.body;
  const user = await userRepository.findByUserId(data.id);
  console.log(data);

  if (!user && data) {
    const addUserId = await userRepository.createUser({
      id: data.id,
      nickname: data.nickname,
      image: data.image,
    });
    res.status(201).json(addUserId);
    currentId = addUserId;
  } else {
    res.status(201).json(user);
    currentId = user.userId;
  }
};

export async function me(req, res, next) {
  const user = await userRepository.findByUserId(currentId);

  if (!user) {
    return res.status(404).json({ message: "User not found" });
  }
  res.status(200).json(user);
}
