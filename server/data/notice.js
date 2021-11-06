import { db } from "../db/database.js";

const SELECT_JOIN =
  "SELECT vs.id, vs.title, vs.createdAt, vs.userId, us.nickname, us.url, us.userId FROM vvs as vs JOIN users as us ON vs.userId = us.userId";

/*const ORDER_DESC = "ORDER BY cm.createdAt DESC"; */
const ORDER_DESC = "ORDER BY vs.id DESC";

/*const ORDER_DESC =
  "ORDER BY CASE WHEN cm.p_id == NULL then cm.id DESC ELSE cm.p_id DESC;" */

export async function getAll() {
  return db
    .execute(`${SELECT_JOIN} ${ORDER_DESC}`)
    .then((result) => result[0])
    .catch((e) => console.log(e));
}

export async function getAllByNickname(nickname) {
  return db
    .execute(`${SELECT_JOIN} WHERE nickname=? ${ORDER_DESC}`, [nickname])
    .then((result) => result[0]);
}

export async function getAllById(id) {
  return db.execute(`${SELECT_JOIN} WHERE vs.id=?`, [id]).then((result) => {
    return result[0][0];
  });
}

export async function create(text, userId) {
  return db
    .execute("INSERT INTO vvs (title, createdAt, userId) VALUES(?,?,?)", [
      text,
      new Date(),
      userId,
    ])
    .then((result) => getAllById(result[0].insertId));
}
