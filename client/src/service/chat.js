export default class ChatService {
  constructor(socket) {
    this.socket = socket;
  }

  onSyncCreateRoom(callback) {
    return this.socket.onSync("create-room", callback);
  }

  onSyncDeleteRoom(callback) {
    return this.socket.onSync("delete-room", callback);
  }

  onSyncCreateChat(callback) {
    return this.socket.onSync("create-chat", callback);
  }
}
