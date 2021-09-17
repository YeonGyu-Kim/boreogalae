export default class CommentService {
  constructor(socket) {
    this.socket = socket;
  }

  onSync(callback) {
    return this.socket.onSync("comments", callback);
  }
}
