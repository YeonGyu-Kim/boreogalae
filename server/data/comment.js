import { db } from "../db/database.js";

const SELECT_JOIN =
  "SELECT cm.id, cm.text, cm.createdAt, cm.userId, cm.contentsId, cm.voteCount, cm.p_id, us.nickname, us.url, us.userId FROM comments as cm JOIN users as us ON cm.userId = us.userId";

/*const ORDER_DESC = "ORDER BY cm.createdAt DESC"; */
const ORDER_DESC =
  "ORDER BY IF(ISNULL(cm.p_id), cm.id, cm.p_id) DESC , cm.createdAt";

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
  return db.execute(`${SELECT_JOIN} WHERE cm.id=?`, [id]).then((result) => {
    console.log(result[0][0]);
    return result[0][0];
  });
}

export async function create(text, userId, contentsId) {
  return db
    .execute(
      "INSERT INTO comments (text, createdAt, userId, contentsId) VALUES(?,?,?,?)",
      [text, new Date(), userId, contentsId]
    )
    .then((result) => getAllById(result[0].insertId));
}

export async function reply(text, userId, contentsId, parentId) {
  return db
    .execute(
      "INSERT INTO comments (text, createdAt, userId, contentsId, p_id) VALUES(?,?,?,?,?)",
      [text, new Date(), userId, contentsId, parentId]
    )
    .then((result) => getAllById(result[0].insertId));
}

export async function update(id, text) {
  return db
    .execute("UPDATE comments SET text=? WHERE id=?", [text, id])
    .then((result) => getAllById(id));
}

export async function count(id, voteCount) {
  return db
    .execute("UPDATE comments SET voteCount=? WHERE id=?", [voteCount, id])
    .then((result) => getAllById(id));
}

export async function remove(id) {
  return db.execute("DELETE FROM comments WHERE id=?", [id]);
}
