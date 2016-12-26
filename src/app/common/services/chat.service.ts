import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs/Rx';
import { WebsocketService } from './websocket.service';
import { Message } from 'app/message';

const CHAT_URL = 'ws://echo.websocket.org/';

@Injectable()
export class ChatService {
    public messages: Subject<Message>;

    constructor(wsService: WebsocketService) {
        this.messages = <Subject<Message>>wsService
            .connect(CHAT_URL)
            .map((response: MessageEvent): Message => {
                let data = JSON.parse(response.data);
                return {
                    author: data.author,
                    message: data.message
                }
            });
    }

    sendMsg(msg: Message) {
        console.log(msg);
        console.log('new message from client to websocket: ', msg);
        this.messages.next(msg);
    }
}