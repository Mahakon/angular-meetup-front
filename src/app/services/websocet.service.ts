import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';
import { Observer } from 'rxjs/Observer';

@Injectable()
export class WebSocetService {
  private subject = new Subject<any>();
  ws = undefined;
  opening = true;

  constructor() { }

  public connect(url): Subject<any> {
    this.subject = this.create(url);
    console.log('Successfully connected: ' + url);
    return this.subject;
  }

  private create(url): Subject<any> {
    this.ws = new WebSocket(url);

    const observable = Observable.create(
      (obs: Observer<any>) => {
        this.ws.onmessage = obs.next.bind(obs);
        this.ws.onerror = obs.error.bind(obs);
        this.ws.onclose = obs.complete.bind(obs);
        return this.ws.close.bind(this.ws);
      });

    const observer = {
      next: (data: Object) => {
        if (this.ws.readyState === WebSocket.OPEN) {
          this.ws.send(JSON.stringify(data));
        }
      }
    };

    return Subject.create(observer, observable);
  }

  close() {
    if (this.ws !== undefined) {
      this.ws.close();
      console.log('WebSocket closed');
    }
  }
}
