import { Component } from '@angular/core';
import { faBox, faWaveSquare, faClock, faAngleDown, faAngleUp, faHeart, faBorderAll, faUsers, faGear } from '@fortawesome/free-solid-svg-icons';
import { faTrello } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-boards',
  templateUrl: './boards.component.html'
})
export class BoardsComponent {
  faBox = faBox;
  faAngleUp = faAngleUp;
  faHeart = faHeart;
  faAngleDown = faAngleDown;
  faBorderAll = faBorderAll;
  faWaveSquare = faWaveSquare;
  faUsers = faUsers;
  faGear = faGear;
  faClock = faClock;
  faTrello = faTrello;
}
