import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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

  constructor(private userService: UsersService, private router: Router) {
    this.userImage = localStorage.getItem('image');
    this.userName = localStorage.getItem('name');

    this.userService.isUserLoggedSubject().subscribe((status) => {
      this.loginState = status;
      if (this.loginState == true) {
        router.navigate(['/todo']);
      }
    });
  }
  ngOnInit(): void {}
  logout() {}
}
