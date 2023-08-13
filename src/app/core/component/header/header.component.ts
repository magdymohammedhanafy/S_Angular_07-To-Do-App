import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  userImage: any = '';
  userName: any = '';
  loginState: boolean = false;

  constructor(private userService: UsersService) {}
  ngOnInit(): void {
    console.log(this.userImage);

    this.userImage = localStorage.getItem('image');
    this.userName = localStorage.getItem('name');
  }
  logout() {}
}
