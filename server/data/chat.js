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
    nickname: {
      type: DataTypes.STRING(15),
      allowNull: false,
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

export async function createChat(text, roomId, userId, nickname) {
  return Chat.create({
    nickname,
    chat: text,
    userUserId: userId,
    roomId,
  }).then((data) => console.log(data));
}
