export class Message {

  constructor(
    public author?: string,
    public message?: string,
    public isMe?: boolean,
    public date?: Date
  ) {
    this.author = author;
    this.message = message;
    this.isMe = isMe;
    this.date = date;
  }

}