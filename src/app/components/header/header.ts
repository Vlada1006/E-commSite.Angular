import { Component, signal } from '@angular/core';
import { PrimaryButton } from '../primary-button/primary-button';

@Component({
  selector: 'app-header',
  imports: [PrimaryButton],
  template: `
    <div class="bg-slate-100 px-4 py-3 shadow-md flex justify-between items-center">
      <span class="text-xl"> My Store</span>
      <app-primary-button label="Cart" (buttonClicked)="ShowButtonClicked()"/>
    </div>
    
  `,
  styles: `
  
  `
})
export class Header {
  ShowButtonClicked(){
    console.log("clicked");
  }
}
