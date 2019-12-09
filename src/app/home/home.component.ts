import { UserService } from './../services/user.service';
import { Component, OnInit } from '@angular/core';
import { User } from '../interfaces/user';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {
  friends: User[];
  query: String = '';
  constructor(private userService: UserService) { 
    this.friends = userService.getFriends();
    console.log(this.friends);
    
  }

  ngOnInit() {
  }

}
