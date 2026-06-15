import { Component , inject } from '@angular/core';
import { HoennLeaderService } from '../hoenn-leader-service';
import { LeaderInfo } from '../leader-info/leader-info';
@Component({
  selector: 'app-hoenn-gym-leader',
  imports: [],
  templateUrl: './hoenn-gym-leader.html',
  styleUrl: './hoenn-gym-leader.css',
})
export class HoennGymLeader {
  hoennLeaderService = inject(HoennLeaderService);
}
