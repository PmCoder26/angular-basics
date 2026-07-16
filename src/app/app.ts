import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  title = 'Parimal Angular Basics'
  name = 'Parimal Matte'

  // users: string[] = ['Parimal', 'Rohit', 'Hemant', 'Karunya', 'Shashank', 'Ishant']
  users: string[] = []  // for 'empty() {}' block.
}
