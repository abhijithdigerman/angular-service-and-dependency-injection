import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserService } from '../../../Services/user.service';
import { User } from '../../../Models/User';

@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.css',
  providers:[UserService]
})
export class UserListComponent {

 

  constructor(private userService :UserService){

  }

  userList:User[] =this.userService.getAllUser()



}
