import { Component, inject } from '@angular/core';
import { CartService } from '../../services/CartService';
import { CartItem } from "./cart-item/cart-item";

@Component({
  selector: 'app-cart',
  imports: [CartItem],
  template: `
    <div class="p-6 flex flex-col gap-4">
      <h2 class="text-2xl"> Shopping Cart</h2>

      @for(item of cartService.cart(); track item.id){
        <app-cart-item [item]="item" />
      }
    </div>
  `,
  styles: ``
})
export class Cart {
    cartService = inject(CartService);
}
