import SQ from "sequelize";
import { sequelize } from "../db/database.js";
import { User } from "./auth.js";
import { Room } from "./room.js";
const DataTypes = SQ.DataTypes;

export const Chat = sequelize.define(
  "chat",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
      unique: true,
    },
    createdAt: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW,
    },
    chat: {
      type: DataTypes.STRING(50),
      allowNull: true,
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
Chat.belongsTo(User);
Chat.belongsTo(Room);

export async function getAll() {
  return Chat.findAll({}).then((data) => data);
}

export async function getAllById() {
  return Chat.findAll({
    where: { roomId: id },
  }).then((data) => {
    console.log(data);
    return data;
  });
}

export async function createChat(text, nickname, url, roomId, userId) {
  return Chat.create({
    chat: text,
    nickname,
    url,
    roomId,
    userUserId: userId,
  }).then((data) => console.log(data));
}

export async function remove(id) {
  return Chat.findByPk(id).then((result) => {
    result.destroy();
  });
}
