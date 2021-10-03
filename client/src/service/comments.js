export default class CommentService {
  constructor(socket) {
    this.socket = socket;
  }

  onSyncCreateComment(callback) {
    return this.socket.onSync("create-comment", callback);
  }

  onSyncCreateReply(callback) {
    return this.socket.onSync("create-reply", callback);
  }

  onSyncDelete(callback) {
    return this.socket.onSync("delete", callback);
  }

  onSyncUpdate(callback) {
    return this.socket.onSync("update", callback);
  }
}
