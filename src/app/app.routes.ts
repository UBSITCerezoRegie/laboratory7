import { Routes } from '@angular/router';
import { KantoGymLeader } from './kanto-gym-leader/kanto-gym-leader';
import { JohtoGymLeader } from './johto-gym-leader/johto-gym-leader';
import { Home } from './home/home';
import { HoennGymLeader } from './hoenn-gym-leader/hoenn-gym-leader';
import { Pokemart } from './pokemart/pokemart';
export const routes: Routes = [
   {path: 'home', component: Home}, //landing page
  { path: 'kanto', component: KantoGymLeader }, // go to kanto
  { path: 'johto', component: JohtoGymLeader }, // johto
  {path: 'hoenn', component: HoennGymLeader}, // go to hoenN!!
  {path: 'pokemart', component: Pokemart}, // go to hoenN!!
  { path: '', redirectTo: 'home', pathMatch:'full'} //deffault
];