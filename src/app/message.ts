export class Message {

  constructor(
    public author?: string,
    public message?: string,
    public isMe?: boolean
  ) {
    this.author = author;
    this.message = message;
    this.isMe = isMe;
  }

}