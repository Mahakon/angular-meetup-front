import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Message } from '../services/chat.service';
import { UserService } from '../services/user.service';

@Injectable()
export class ChatResolver implements Resolve<Message[]> {

  constructor(private userService: UserService) {}

  resolve(): Observable<Message[]> {
    return this.userService.getMessageList();
  }
}
