import { Component } from '@angular/core';
import { WebsocketService } from './common/services/websocket.service';
import { ChatService } from './common/services/chat.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ WebsocketService, ChatService ]
})
export class AppComponent {

    constructor(private chatService: ChatService) { }

}