import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-chat-toolbar',
  templateUrl: './chat-toolbar.component.html',
  styleUrls: ['./chat-toolbar.component.less']
})
export class ChatToolbarComponent implements OnInit {

  @Input() login: string;

  constructor() { }

  ngOnInit() {
  }

}
