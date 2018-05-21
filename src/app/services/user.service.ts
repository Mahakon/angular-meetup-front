import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {backHost, host} from '../config';
import {Message} from './chat.service';

export interface UserData {
  id: number;
  login: string;
}

@Injectable()
export class UserService {
  user: UserData;
  headers: HttpHeaders;
  options: object;

  constructor(
    private http: HttpClient
  ) {
    this.headers = new HttpHeaders({
      'Access-Control-Allow-Credentials': 'true',
      'Access-Control-Allow-Origin': backHost,
      'Access-Control-Allow-Methods': '*',
      'Access-Control-Allow-Headers': [ 'Content-Type', '*']
    });
    this.options = { headers: this.headers, withCredentials: true };
    }

  checkIsLogin(login): Observable<any> {
    const formData = new FormData(), url = host + 'auth/check';

    formData.append('login', login);

    return this.http.post<any>(url, formData);
  }

  addUser(login): Observable<UserData> {
    const formData = new FormData(), url = host + 'auth';

    formData.append('login', login);

    return this.http.post<UserData>(url, formData, this.options);
  }

  checkSession(): Observable<UserData> {
    const url = host + 'session/check';

    return this.http.get<UserData>(url, this.options);
  }

  getMessageList(): Observable<Message[]> {
    const url = host + 'chat/get/messages';

    return this.http.get<Message[]>(url);
  }

  turnOnloadingAnimation(elementId) {
    document.getElementById(elementId).style.display = 'block';
  }

  turnOffLoadingAnimation(elementId) {
    document.getElementById(elementId).style.display = 'none';
  }

}
