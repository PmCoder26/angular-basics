import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';

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

}
