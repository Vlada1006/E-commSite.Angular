import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './components/header/header';

@Component({
  selector: 'app-root',
  imports: [Header],
  template: ` <app-header /> `,
  styles: [],
})
export class App {
  protected title = 'Angular-ecomm';
}
