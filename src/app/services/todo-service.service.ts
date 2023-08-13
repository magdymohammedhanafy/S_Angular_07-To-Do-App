import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Observer } from 'rxjs';
import { Todo } from '../models/todo';

@Injectable({
  providedIn: 'root',
})
export class TodoServiceService {
  httpOption: {};
  constructor(private httpClient: HttpClient) {
    this.httpOption = {
      headers: new HttpHeaders({
        Authorization: 'Basic ' + btoa('zucker:123456'),
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
