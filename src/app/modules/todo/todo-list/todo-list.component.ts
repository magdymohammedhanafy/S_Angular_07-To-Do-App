import { Component, OnInit } from '@angular/core';
import { Observer } from 'rxjs';
import { Todo } from 'src/app/models/todo';
import { TodoServiceService } from 'src/app/services/todo-service.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css'],
})
export class TodoListComponent implements OnInit {
  comStatus: string = 'not Completed';
  todoList: Todo[] = [];

  constructor(private todoService: TodoServiceService) {}
  ngOnInit(): void {
    this.todoService.getAllTodoList().subscribe((todoItems) => {
      this.todoList = todoItems;
    });
  }

  deleteTodo(id: number) {
    alert('you sure that you want delete this todo');
    this.todoService.deleteTodoById(id).subscribe((todoItem) => {
      this.todoService.getAllTodoList().subscribe((todoItems) => {
        this.todoList = todoItems;
      });
    });
  }

  updateStatus(id: number) {
    this.todoService.ToggleTodoCompletion(id).subscribe((todoItem) => {
      console.log(this.todoList);
    });
  }
}
