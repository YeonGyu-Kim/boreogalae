export default class CommentService {
  constructor(socket) {
    this.socket = socket;
  }

  onSyncCreate(callback) {
    return this.socket.onSync("create", callback);
  }

  onSyncDelete(callback) {
    return this.socket.onSync("delete", callback);
  }

  onSyncUpdate(callback) {
    return this.socket.onSync("update", callback);
  }
}
