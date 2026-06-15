import { Component , Inject, inject, Injector } from '@angular/core';
import { PokemonService } from '../pokemon-service';
@Component({
  selector: 'app-hoenn-gym-leader',
  imports: [],
  templateUrl: './hoenn-gym-leader.html',
  styleUrl: './hoenn-gym-leader.css',
})
export class HoennGymLeader {
  PokemonService = inject(PokemonService);
}
