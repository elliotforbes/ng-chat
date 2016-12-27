import { Component, OnInit } from '@angular/core';
import { ChatService } from 'app/common/services/chat.service';
import { Message } from 'app/message';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss'],
  providers: [ ChatService ]
})
export class ChatComponent implements OnInit {

  private message: Message;
  private messages: Message[];

  constructor(private chatService: ChatService) { }

  ngOnInit() {
    this.message = new Message();
    this.messages = [];

    this.chatService.messages.subscribe(msg => {         
      msg.isMe = false;
      console.log(msg);
      msg.date = new Date();
      this.messages.push(msg);
    });
  }

  sendMsg() {
    this.message.isMe = true;
    this.message.date = new Date();
    this.chatService.sendMsg(this.message);
    this.messages.push(this.message);
    this.message = new Message();
  }

  enterMsg(event) {
    if(event.keyCode == 13) {
      this.message.isMe = true;
      this.message.date = new Date();
      this.chatService.sendMsg(this.message);
      this.messages.push(this.message);
      this.message = new Message();
    }
  }

}
