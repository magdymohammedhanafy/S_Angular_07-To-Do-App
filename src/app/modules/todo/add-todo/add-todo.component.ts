import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';
import { Todo } from 'src/app/models/todo';
import { TodoServiceService } from 'src/app/services/todo-service.service';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css'],
})
export class AddTodoComponent {
  taskTitle: String = '';
  constructor(
    private todoService: TodoServiceService,
    private router: Router
  ) {}

  test() {
    console.log(this.taskTitle);
  }

  addTodo() {
    this.todoService.addProduct(this.taskTitle).subscribe((todo) => {
      console.log(this.taskTitle);
      console.log(todo);
      this.router.navigate(['todo']);
    });
  }
}
