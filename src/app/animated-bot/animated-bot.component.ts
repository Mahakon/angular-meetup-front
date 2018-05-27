import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-animated-bot',
  templateUrl: './animated-bot.component.html',
  styleUrls: ['./animated-bot.component.less']
})
export class AnimatedBotComponent implements OnInit {

  @Input() state = {
    angry: false,
    normal: false,
    antenns: true,
    pupil: false,
    open: false,
    close: false,
    loading: true
  };
  constructor() { }

  ngOnInit() {
  }

}
