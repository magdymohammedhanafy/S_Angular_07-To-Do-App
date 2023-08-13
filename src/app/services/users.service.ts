import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Users } from '../models/users';

@Injectable({
  providedIn: 'root',
})
export class UsersService implements OnInit {
  private isLoggedSubject!: BehaviorSubject<boolean>;
  currentUserName: String = 'zucker';
  currentUserImage: String = 'https://robohash.org/zucker-ping.png';
  userToken: any;
  constructor(private httpClient: HttpClient) {
    if (localStorage.getItem('token')) {
      this.isLoggedSubject = new BehaviorSubject<boolean>(true);
    } else {
      this.isLoggedSubject = new BehaviorSubject<boolean>(false);
    }
  }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  getAllUsers(): Observable<Users[]> {
    return this.httpClient.get<Users[]>('http://localhost:4000/users');
  }

  login(password: String, userId: number) {
    if (userId == 1 && password == '123456') {
      this.userToken = 'Basic ' + btoa('zucker:123456');
      localStorage.setItem('token', this.userToken);
      localStorage.setItem('name', 'zucker');
      localStorage.setItem('image', 'https://robohash.org/zucker-ping.png');
      this.isLoggedSubject.next(true);
      ////////////////////////////////////////
    } else if (userId == 2 && password == '123123') {
      this.userToken = 'Basic ' + btoa('felon:123123');
      localStorage.setItem('token', this.userToken);
      localStorage.setItem('name', 'felon');
      localStorage.setItem('image', 'https://robohash.org/felon-must.png');
      this.isLoggedSubject.next(true);
      //////////////////////////////////////////
    } else if (userId == 3 && password == 'secret') {
      this.userToken = 'Basic ' + btoa('robon:secret');
      localStorage.setItem('token', this.userToken);
      localStorage.setItem('name', 'robon');
      localStorage.setItem('image', 'https://robohash.org/robon-wood.png');
      this.isLoggedSubject.next(true);
      //////////////////////////////////////////
    } else {
      console.log('wrong pass');
    }
  }

  logOut() {
    localStorage.clear();
    this.isLoggedSubject.next(false);
  }

  get isUserLogged(): boolean {
    return localStorage.getItem('token') ? true : false;
  }

  isUserLoggedSubject() {
    return this.isLoggedSubject.asObservable();
  }
}
