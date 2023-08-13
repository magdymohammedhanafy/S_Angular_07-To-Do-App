import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { Observable, Observer } from 'rxjs';
import { Todo } from '../models/todo';
import { UsersService } from './users.service';

@Injectable({
  providedIn: 'root',
})
export class TodoServiceService {
  httpOption: {};
  userName: any;
  pass: any;

  constructor(
    private httpClient: HttpClient,
    private userService: UsersService
  ) {
    this.userName = localStorage.getItem('name');
    if (this.userName == 'zucker') {
      this.pass = 123456;
    } else if (this.userName == 'felon') {
      this.pass = 123123;
    } else if (this.userName == 'robon') {
      this.pass = 'secret';
    }

    this.httpOption = {
      headers: new HttpHeaders({
        Authorization: 'Basic ' + btoa(`${this.userName}:${this.pass}`),
      }),
    };
  }

  getAllTodoList(): Observable<Todo[]> {
    return this.httpClient.get<Todo[]>(
      'http://localhost:4000/todos',
      this.httpOption
    );
  }

  deleteTodoById(id: number): Observable<Todo[]> {
    return this.httpClient.delete<Todo[]>(
      `http://localhost:4000/todos/${id}`,
      this.httpOption
    );
  }

  ToggleTodoCompletion(id: number) {
    return this.httpClient.put<Todo[]>(
      `http://localhost:4000/todos/${id}`,
      {},
      this.httpOption
    );
  }

  addProduct(todo: String): Observable<Todo> {
    return this.httpClient.post<Todo>(
      `http://localhost:4000/todos`,
      { task: todo },
      this.httpOption
    );
  }
}
