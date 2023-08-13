import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Users } from '../models/users';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  private isLoggedSubject!: BehaviorSubject<boolean>;
  currentUserName: String = 'zucker';
  currentUserImage: String = 'https://robohash.org/zucker-ping.png';
  constructor(private httpClient: HttpClient) {
    this.isLoggedSubject = new BehaviorSubject<boolean>(false);
  }

  getAllUsers(): Observable<Users[]> {
    return this.httpClient.get<Users[]>('http://localhost:4000/users');
  }

  login(password: String, userId: number) {
    if (userId == 1 && password == '123456') {
      let userToken = 'Basic ' + btoa('zucker:123456');
      localStorage.setItem('token', userToken);
      localStorage.setItem('name', 'zucker');
      localStorage.setItem('image', 'https://robohash.org/zucker-ping.png');

      ////////////////////////////////////////
    } else if (userId == 2 && password == '123123') {
      let userToken = 'Basic ' + btoa('felon:123123');
      localStorage.setItem('token', userToken);
      localStorage.setItem('name', 'felon');
      localStorage.setItem('image', 'https://robohash.org/zucker-ping.png');
      this.isLoggedSubject.next(true);
      //////////////////////////////////////////
    } else if (userId == 3 && password == 'secret') {
      let userToken = 'Basic ' + btoa('robon:secret');
      localStorage.setItem('token', userToken);
      localStorage.setItem('robon', 'zucker');
      localStorage.setItem('image', 'https://robohash.org/zucker-ping.png');
      this.isLoggedSubject.next(true);
      //////////////////////////////////////////
    } else {
      console.log('wrong pass');
    }
  }

  logOut() {
    localStorage.removeItem('token');
    this.isLoggedSubject.next(false);
  }

  get isUserLogged(): boolean {
    return localStorage.getItem('token') ? true : false;
  }

  isUserLoggedSubject() {
    return this.isLoggedSubject.asObservable();
  }
}
