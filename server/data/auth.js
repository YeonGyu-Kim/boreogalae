import SQ from "sequelize";
import { db } from "../db/database.js";
import { sequelize } from "../db/database.js";
const DataTypes = SQ.DataTypes;

export const User = sequelize.define(
  "user",
  {
    userId: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    nickname: {
      type: DataTypes.STRING(45),
      allowNull: false,
    },
    url: DataTypes.TEXT,
  },
  {
    timestamps: false,
  }
);

export async function findByUserId(id) {
  return User.findByPk(id);
  /*
  return db
    .execute(`SELECT * FROM users WHERE userId=?`, [id])
    .then((result) => {
      console.log(result[0][0]);
      return result[0][0];
    });
     */
}

export async function createUser(user) {
  return User.create(user).then((data) => data.dataValues.id);
  /*
  const { nickname, image, id } = user;
  return db
    .execute("INSERT INTO users (nickname, url, userId) VALUES (?,?,?)", [
      nickname,
      image,
      id,
    ])
    .then((result) => {
      return id;
    })
    .catch((e) => console.error(e));
 */
}
