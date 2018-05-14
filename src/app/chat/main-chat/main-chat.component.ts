import {Component, OnDestroy, OnInit} from '@angular/core';
import { UserData, UserService } from '../../services/user.service';
import {ChatEvents, ChatService, Message} from '../../services/chat.service';
import {Subscription} from 'rxjs/Subscription';

@Component({
  selector: 'app-main-chat',
  templateUrl: './main-chat.component.html',
  styleUrls: ['./main-chat.component.less']
})
export class MainChatComponent implements OnInit, OnDestroy {

  user: UserData;
  messageList: Message[];
  subscriptionToAddNewMessage: Subscription;

  constructor(
    private userService: UserService,
    private chatService: ChatService
  ) { }

  ngOnInit() {
    this.user = this.userService.user;
    this.messageList = this.chatService.messageList;
    this.subscriptionToAddNewMessage =
      this.chatService.getSubscriptionToEvent(ChatEvents.ADD)
        .subscribe(
          data => {
            this.getNewMessage(data);
          }
        );
  }

  ngOnDestroy() {
    this.subscriptionToAddNewMessage.unsubscribe();
  }

  addNewMessage(content) {
    this.chatService.sendEvent(
      ChatEvents.ADD,
      {
            content: content,
            userId: this.user.id
           }
    );
  }

  getNewMessage(data) {
    this.messageList.push(data);
  }

}
