import { Component, signal } from '@angular/core';
import { LeaderInfo } from '../leader-info/leader-info';

@Component({
  selector: 'app-kanto-gym-leader',
  imports: [LeaderInfo],
  templateUrl: './kanto-gym-leader.html',
  styleUrl: './kanto-gym-leader.css',
})
export class KantoGymLeader {

  gymLeaderK = signal([
      {
        name: 'Brock',
        age: 15,
        location: 'Pewter City',
        badge: 'Boulder Badge',
        motto: 'Rock-solid defense is the key to victory!',
        team: ['Geodude', 'Onix']
      },
      {
        name: 'Misty',
        age: 16,
        location: 'Cerulean City',
        badge: 'Cascade Badge',
        motto: 'Go with the flow and strike like a tidal wave!',
        team: ['Staryu', 'Starmie']
      },
      {
        name: 'Lt. Surge',
        age: 32,
        location: 'Vermilion City',
        badge: 'Thunder Badge',
        motto: 'Electric power and discipline win every battle!',
        team: ['Voltorb', 'Pikachu', 'Raichu']
      },
      {
        name: 'Erika',
        age: 20,
        location: 'Celadon City',
        badge: 'Rainbow Badge',
        motto: "Nature’s beauty hides incredible strength.",
        team: ['Victreebel', 'Tangela', 'Vileplume']
      },
      {
        name: 'Koga',
        age: 38,
        location: 'Fuchsia City',
        badge: 'Soul Badge',
        motto: 'A true ninja strikes before being seen.',
        team: ['Koffing', 'Muk', 'Weezing']
      },
      {
        name: 'Sabrina',
        age: 19,
        location: 'Saffron City',
        badge: 'Marsh Badge',
        motto: 'The mind is the most powerful force of all.',
        team: ['Kadabra', 'Mr. Mime', 'Alakazam']
      },
      {
        name: 'Blaine',
        age: 58,
        location: 'Cinnabar Island',
        badge: 'Volcano Badge',
        motto: 'Keep your passion burning hotter than fire!',
        team: ['Growlithe', 'Ponyta', 'Arcanine']
      },
      {
        name: 'Giovanni',
        age: 41,
        location: 'Viridian City',
        badge: 'Earth Badge',
        motto: 'Power and ambition shape the world.',
        team: ['Dugtrio', 'Nidoqueen', 'Nidoking']
      }
    ]
  );

}