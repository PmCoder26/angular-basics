import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { Todo } from './models/todos';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  title = 'Parimal Angular Basics'
  name = 'Parimal Matte'

  // users: string[] = ['Parimal', 'Rohit', 'Hemant', 'Karunya', 'Shashank', 'Ishant']
  users: string[] = []  // for 'empty() {}' block.

  // Two Way Binding.
  userName: string = "";
  age: number = 0;
  isAdmin: boolean = false;
  
  loadSampleData() {
    this.userName = 'Tony';
    this.age = 42;
    this.isAdmin = true;
  }

  resetSampleData() {
    this.userName = '';
    this.age = 0;
    this.isAdmin = false;
  }

  // To-Dos List.
  todos: Todo[] = [];
  taskString: string = '';
  warningMessge: string = '';

  addTask() {
    if(this.taskString == '') {
      this.warningMessge = 'Task cannot be empty!';
      return;
    }

    const id = this.todos.length === 0 ? 0 : this.todos[this.todos.length - 1].id + 1;

    const todo: Todo = {
      id: id,
      title: this.taskString,
      completed: false
    };
    this.todos.push(todo);

    this.taskString = '';
    this.warningMessge = '';
  }

  deleteTask(id: number) {
    this.todos = this.todos.filter((todo) => todo.id != id);
  }  

  clearWarning() {
    this.warningMessge = '';
  }

}
