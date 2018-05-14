import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import setEndOfContenteditable from '../../utils/setEndOfContenteditable';

@Component({
  selector: 'app-message-input',
  templateUrl: './message-input.component.html',
  styleUrls: ['./message-input.component.less']
})
export class MessageInputComponent implements OnInit {

  content: string;
  @Output() addNewMessage: EventEmitter<string> = new EventEmitter<string>();
  constructor() { }

  ngOnInit() {
  }

  handleNewMessage() {
    this.addNewMessage.emit(this.content);
    this.content = '';
  }

  handleInputMessage({ target }) {
    this.content = target.textContent;
  }

}
