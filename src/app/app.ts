import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { Todo } from './models/todos';
import { NgIf, NgFor, NgSwitch, NgSwitchCase } from '@angular/common';
import { Student } from './models/student';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FormsModule, NgIf, NgFor, NgSwitch, NgSwitchCase],
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

  // ===============================
  // Dynamic Styling
  // ===============================

  // Background color applied to the heading.
  bgColor = 'green';

  // Default font size (not currently used in the template, but can be used if needed).
  fontSize = '30px';

  // Font size when the heading is enlarged.
  headingSizeBig = '80px';

  // Font size when the heading is in its normal state.
  headingSizeSmall = '30px';

  // Controls whether the heading is displayed in large or small size.
  // true  -> headingSizeBig
  // false -> headingSizeSmall
  zoom = false;

  // Toggles the heading size between large and small.
  toggleHeadingSize() {
    this.zoom = !this.zoom;
  }

  // ===============================
  // Angular Structural Directives
  // Demonstrates:
  // 1. *ngIf      - Conditionally display elements.
  // 2. *ngFor     - Iterate over a collection.
  // 3. ngSwitch   - Display content based on a selected value.
  // ===============================

  // Controls the visibility of the heading.
  // true  -> Heading is displayed.
  // false -> Heading is hidden.
  showHeading = true;

  // Collection of students displayed using *ngFor.
  students: Student[] = [
    { rollNo: 1, name: 'Parimal', age: 22 },
    { rollNo: 2, name: 'Hemant', age: 21 },
    { rollNo: 3, name: 'Rohit', age: 23 },
    { rollNo: 4, name: 'Shashank', age: 20 },
    { rollNo: 5, name: 'Sankalp', age: 22 },
    { rollNo: 6, name: 'Ishant', age: 21 },
  ];

  // Stores the currently selected color for ngSwitch.
  color = 'red';

  // Toggles the visibility of the heading.
  toggleDirectiveHeading() {
    this.showHeading = !this.showHeading;
  }

  // Updates the selected color.
  // ngSwitch uses this value to determine which element to display.
  changeColor(color: string) {
    this.color = color;
  }

}
