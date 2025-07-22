import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Personas } from './components/personas/personas';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    Personas
  ],
  template: `<app-personas></app-personas>`,
  styleUrls: ['./app.css']
})
export class App {
  protected title = 'Clase05';
}
