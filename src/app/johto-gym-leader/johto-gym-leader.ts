import { Component, signal, inject } from '@angular/core';
import { PokemonService } from '../pokemon-service';

@Component({
  selector: 'app-johto-gym-leader',
  imports: [],
  templateUrl: '/johto-gym-leader.html',
  styleUrl: './johto-gym-leader.css',
})
export class JohtoGymLeader {


  PokemonService = inject(PokemonService);
}