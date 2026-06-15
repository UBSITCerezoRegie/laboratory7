import { Injectable ,signal} from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class HoennLeaderService {
  public hoennG = signal ([
    
      { badge: 'Stone Badge', team: ['Geodude', 'Nosepass'], town: 'Rustboro City', name: 'Roxanne', specialty: 'Rock' },
      { badge: 'Knuckle Badge', team: ['Machop', 'Makuhita'], town: 'Dewford Town', name: 'Brawly', specialty: 'Fighting' },
      { badge: 'Dynamo Badge', team: ['Magnemite', 'Voltorb', 'Magneton'], town: 'Mauville City', name: 'Wattson', specialty: 'Electric' },
      { badge: 'Heat Badge', team: ['Slugma', 'Slugma', 'Torkoal'], town: 'Lavaridge Town', name: 'Flannery', specialty: 'Fire' },
      { badge: 'Balance Badge', team: ['Slakoth', 'Vigoroth', 'Slaking'], town: 'Petalburg City', name: 'Norman', specialty: 'Normal' },
      { badge: 'Feather Badge', team: ['Swellow', 'Pelipper', 'Skarmory', 'Altaria'], town: 'Fortree City', name: 'Winona', specialty: 'Flying' },
      { badge: 'Mind Badge', team: ['Lunatone', 'Solrock'], town: 'Mossdeep City', name: 'Tate & Liza', specialty: 'Psychic' },
      { badge: 'Rain Badge', team: ['Luvdisc', 'Whiscash', 'Sealeo', 'Milotic'], town: 'Sootopolis City', name: 'Wallace', specialty: 'Water' }
    
  ])
  gymleader = this.hoennG.asReadonly(); 
}


