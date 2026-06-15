import { Component, signal } from '@angular/core';
import { LeaderInfo } from '../leader-info/leader-info';

@Component({
  selector: 'app-johto-gym-leader',
  imports: [LeaderInfo],
  templateUrl: './johto-gym-leader.html',
  styleUrl: './johto-gym-leader.css',
})
export class JohtoGymLeader {

  gymLeaderJ = signal([
    {
      name: 'Falkner',
      age: 15,
      location: 'Violet City',
      badge: 'Zephyr Badge',
      motto: 'The elegant dance of bird Pokémon!',
      team: ['Pidgey', 'Pidgeotto']
    },
    {
      name: 'Bugsy',
      age: 14,
      location: 'Azalea Town',
      badge: 'Hive Badge',
      motto: 'Bug Pokémon never lose when properly trained!',
      team: ['Metapod', 'Kakuna', 'Scyther']
    },
    {
      name: 'Whitney',
      age: 18,
      location: 'Goldenrod City',
      badge: 'Plain Badge',
      motto: 'Cute Pokémon are stronger than they look!',
      team: ['Clefairy', 'Miltank']
    },
    {
      name: 'Morty',
      age: 22,
      location: 'Ecruteak City',
      badge: 'Fog Badge',
      motto: 'The future is hidden within the shadows.',
      team: ['Gastly', 'Haunter', 'Gengar']
    },
    {
      name: 'Chuck',
      age: 35,
      location: 'Cianwood City',
      badge: 'Storm Badge',
      motto: 'Train hard, battle harder!',
      team: ['Primeape', 'Poliwrath']
    },
    {
      name: 'Jasmine',
      age: 20,
      location: 'Olivine City',
      badge: 'Mineral Badge',
      motto: 'Steel Pokémon shine with inner strength.',
      team: ['Magnemite', 'Magnemite', 'Steelix']
    },
    {
      name: 'Pryce',
      age: 65,
      location: 'Mahogany Town',
      badge: 'Glacier Badge',
      motto: 'Experience is the true source of power.',
      team: ['Seel', 'Dewgong', 'Piloswine']
    },
    {
      name: 'Clair',
      age: 24,
      location: 'Blackthorn City',
      badge: 'Rising Badge',
      motto: 'Dragon masters never back down!',
      team: ['Dragonair', 'Dragonair', 'Kingdra']
    }
  ]);

}