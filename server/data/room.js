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
    title: {
      type: DataTypes.STRING(100),
    },
    createdAt: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW,
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
Room.belongsTo(User);

export async function getAll() {
  return Room.findAll({}).then((data) => data);
}

export async function createChatRoom(title, userId, nickname, url) {
  return Room.create({
    title,
    userUserId: userId,
    nickname,
    url,
  }).then((data) => data);
}

export async function removeRoom(id) {
  return Room.destroy({ where: { id } });
}
