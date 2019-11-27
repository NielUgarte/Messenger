import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../services/user.service';
import { User } from '../interfaces/user';

@Component({
  selector: 'app-conversation',
  templateUrl: './conversation.component.html',
  styleUrls: ['./conversation.component.sass']
})
export class ConversationComponent implements OnInit {
  friendId: any;
  friends: User[];
  friend: User;
  fecha: any = Date.now();
  constructor(private activateRoute: ActivatedRoute, private userService: UserService) { 

    this.friendId = this.activateRoute.snapshot.params['uid'];
    console.log(this.friendId);
    this.friends = this.userService.getFriends();
    this.friend = this.friends.find((record) => {
      return record.uid == this.friendId;
    });
    console.log(this.friend);
    
    
  }

  ngOnInit() {
  }

}
