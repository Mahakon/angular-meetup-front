import { Injectable } from '@angular/core';
import { EventEmitter } from 'events';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/map';
import { fromEvent } from 'rxjs/observable/fromEvent';
import { WebSocetService } from './websocet.service';
import { wsHost } from '../config';
import { Observable } from 'rxjs/Observable';
import {UserService} from './user.service';

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
  private eventEmitter = new EventEmitter();
  public messageList: Message[];

  constructor(
    private websocketService: WebSocetService,
    private userService: UserService
  ) {
    this.openConnection();
    this.createEvents();
    this.messageList = [];
  }

  openConnection() {
   this.websocket = <Subject<any>>this.websocketService
      .connect(wsHost + this.userService.user.id)
      .map((response: MessageEvent): any => {
        return JSON.parse(response.data);
      });
  }

  createEvents() {
    this.websocket.subscribe(
      res => {
        if (res['event'] === ChatEvents.ADD) {
          console.log('emit' + ChatEvents.ADD);
          this.eventEmitter.emit(ChatEvents.ADD,
            res['data']);
        }
      },
      err => {
        console.log(err);
      },
      () => {
        if (this.websocketService.opening) {
          this.openConnection();
          this.createEvents();
        }
      }
    );
  }

  getSubscriptionToEvent(event: ChatEvents): Observable<any> {
    return fromEvent(this.eventEmitter, event);
  }

  sendEvent(event: ChatEvents, data: object) {
    this.websocket.next({
      event: event,
      data: data
    });
  }

}
