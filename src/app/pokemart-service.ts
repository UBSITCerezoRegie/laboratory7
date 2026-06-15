import { Injectable ,signal, computed} from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PokemartService {
  items = signal ([
    {id: 1, name: "potion", price:300},
    { id: 2, name: 'Super Potion', price: 700 },
    { id: 3, name: 'Hyper Potion', price: 1200 },
    { id: 4, name: 'Max Potion', price: 2500 },
    { id: 5, name: 'Revive', price: 1500 },
    { id: 6, name: 'Full Heal', price: 600 },
    { id: 7, name: 'Antidote', price: 100 },
    { id: 8, name: 'Paralyze Heal', price: 200 },
    { id: 9, name: 'Escape Rope', price: 550 },
    { id: 10, name: 'Poke Ball', price: 200 }
  ]);

  private cardItems = signal<any[]>([]);
  
  cart = this.cardItems.asReadonly();

  totalPrice = computed (() => 
  this.cardItems().reduce(
    (sum,item) => sum + item.price, 0 
  )
  );

  addToCart(item: any){
    this.cardItems.update (
      current => [...current,item]
    );
  }
  clearCart(){
    this.cardItems.set([]);
  }
}
