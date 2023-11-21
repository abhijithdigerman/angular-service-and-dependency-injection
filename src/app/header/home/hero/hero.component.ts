import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { subscribeService } from '../../../Services/subscribe.service';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {




  OnSubcrib(){
    let subService=new subscribeService();
    subService.OnSubscribeClicked('Mothily')
  }

}
