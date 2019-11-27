import { Injectable } from '@angular/core';
import { User } from '../interfaces/user';
import { Status } from '../interfaces/enum';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  friends: User[];
  constructor() { 
    let userOne: User = {
      nick: 'Niel 1',
      subnick: 'Necros',
      age: 28,
      email: 'nugartemacedo@gmail.com',
      friend: true,
      uid:1,
      status: Status.Online
    };
    let userTwo: User = {
      nick: 'Niel 2',
      subnick: 'Necros',
      age: 28,
      email: 'nugartemacedo@gmail.com',
      friend: false,
      uid:2,
      status: Status.Offline
    };
    let userThree: User = {
      nick: 'Niel 3',
      subnick: 'Necros',
      age: 28,
      email: 'nugartemacedo@gmail.com',
      friend: true,
      uid:3,
      status: Status.Offline
    };
    let userFour: User = {
      nick: 'Niel 4',
      subnick: 'Necros',
      age: 28,
      email: 'nugartemacedo@gmail.com',
      friend: false,
      uid:4,
      status: Status.Away
    };
    let userFive: User = {
      nick: 'Niel 5',
      subnick: 'Necros',
      age: 28,
      email: 'nugartemacedo@gmail.com',
      friend: true,
      uid:5,
      status: Status.Busy
    };
    this.friends = [userOne, userTwo, userThree, userFour, userFive]
  }
  
  getFriends(){
    return this.friends;
  }
}

