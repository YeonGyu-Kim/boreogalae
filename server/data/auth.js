import { db } from "../db/database.js";

export async function findByUserId(id) {
  return db
    .execute(`SELECT * FROM users WHERE userId=?`, [id])
    .then((result) => {
      console.log(result[0][0]);
      return result[0][0];
    });
}

export async function createUser(user) {
  const { nickname, image, id } = user;
  return db
    .execute("INSERT INTO users (nickname, url, userId) VALUES (?,?,?)", [
      nickname,
      image,
      id,
    ])
    .then((result) => {
      return result;
    })
    .catch((e) => console.error(e));
}
