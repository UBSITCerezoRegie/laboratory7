import { Component ,inject} from '@angular/core';
import { PokemartService } from '../pokemart-service';
@Component({
  selector: 'app-pokemart',
  imports: [],
  templateUrl: './pokemart.html',
  styleUrl: './pokemart.css',
})
export class Pokemart {
  pokemartService = inject(PokemartService)
}
