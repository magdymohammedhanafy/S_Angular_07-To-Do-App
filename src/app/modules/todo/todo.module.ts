import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TodoRoutingModule } from './todo-routing.module';
import { TodoListComponent } from './todo-list/todo-list.component';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatButtonModule } from '@angular/material/button';
import { AddTodoComponent } from './add-todo/add-todo.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [TodoListComponent, AddTodoComponent],
  imports: [
    CommonModule,
    TodoRoutingModule,
    MatSlideToggleModule,
    MatButtonModule,
    FormsModule,
    HttpClientModule,
  ],
})
export class TodoModule {}
