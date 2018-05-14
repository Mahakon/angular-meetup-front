import { Injectable } from '@angular/core';

export interface UserData {
  id: number;
  login: string;
}

@Injectable()
export class UserService {
  user: UserData;
  constructor() {
    this.user = {
      id: 1,
      login: 'maha'
    };
  }

}
