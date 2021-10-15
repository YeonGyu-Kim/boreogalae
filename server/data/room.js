import SQ from "sequelize";
import { currentUser } from "../controller/auth.js";
import { sequelize } from "../db/database.js";
import { User } from "./auth.js";
import { Chat } from "./chat.js";
const DataTypes = SQ.DataTypes;

export const Room = sequelize.define(
  "room",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
      unique: true,
    },
    nickname: {
      type: DataTypes.STRING(15),
      allowNull: false,
    },
    title: {
      type: DataTypes.STRING(100),
    },
    createdAt: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW,
    },
    max: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      defaultValue: 10,
      min: 2,
    },
    url: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
  },
  {
    timestamps: false,
  }
);
Room.belongsTo(User);

export async function getAll() {
  return Room.findAll().then((data) => {
    console.log(data);
    return data;
  });
}

export async function createChatRoom(currentUser, title, max, currentId, url) {
  return Room.create({
    nickname: currentUser,
    title,
    max,
    userUserId: currentId,
    url,
  }).then((data) => data);
}
