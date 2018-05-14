import { Component, Input, OnInit } from '@angular/core';
import { Message } from '../../services/chat.service';
import { UserData } from '../../services/user.service';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.less']
})
export class MessageComponent implements OnInit {

  @Input() message: Message;
  @Input() user: UserData;

  constructor() { }

  ngOnInit() {
  }

}
