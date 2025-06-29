import { Component, input, output } from '@angular/core';

@Component({
  selector: 'app-button',
  imports: [],
  template: `
    <button 
    class=" text-black w-full px-5 py-2 border rounded-xl shadow-md hover:bg-slate-200"
    (click)="buttonClicked.emit()"
    >
      {{label()}}
    </button>
  `,
  styles: ``
})
export class Button {
  label = input('');
  buttonClicked = output();
}
