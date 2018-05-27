import { Injectable } from '@angular/core';
import { EventEmitter } from 'events';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/map';
import { fromEvent } from 'rxjs/observable/fromEvent';
import { WebSocetService } from './websocet.service';
import { wsHost } from '../config';
import { Observable } from 'rxjs/Observable';
import { UserService } from './user.service';
import 'rxjs/add/operator/filter';

export enum ChatEvents {
  ADD = 'ADD',
  DELETE = 'DELETE',
  LIKE = 'LIKE'
}

export interface Message {
  id: number;
  userId: number;
  login: string;
  content: string;
}

@Injectable()
export class ChatService {
  private websocket: Subject<any>;
  public messageList: Message[];

  constructor(
    private websocketService: WebSocetService,
    private userService: UserService
  ) {
    this.openConnection();
    this.messageList = [];
  }

  openConnection() {
   this.websocket = <Subject<any>>this.websocketService
      .connect(wsHost + this.userService.user.id)
      .map((response: MessageEvent): any => {
        return JSON.parse(response.data);
      });
  }

  getSubscriptionToEvent(event: ChatEvents): Observable<any> {
    return this.websocket
      .filter(res => res['event'] === event)
      .map(res => res['data']);
  }

  sendEvent(event: ChatEvents, data: object) {
    this.websocket.next({
      event: event,
      data: data
    });
  }

}
