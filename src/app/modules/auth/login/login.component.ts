import { Component, OnInit } from '@angular/core';
import { Users } from 'src/app/models/users';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  availableUsers: Users[] = [];
  selectedUserId: number = 0;
  enteredUserPassword: String = '';
  selectedUser: Users[] = [];

  isUserLogged: boolean = false;
  constructor(private usersService: UsersService) {}
  ngOnInit(): void {
    this.usersService.getAllUsers().subscribe((users) => {
      this.availableUsers = users;
    });
    this.isUserLogged = this.usersService.isUserLogged;
  }

  login() {
    this.usersService.login(this.enteredUserPassword, this.selectedUserId);
    this.isUserLogged = this.usersService.isUserLogged;
  }
  logout() {
    this.usersService.logOut();
    this.isUserLogged = this.usersService.isUserLogged;
  }
}
