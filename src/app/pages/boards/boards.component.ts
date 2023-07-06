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

  items = [
    {
      label: 'item 1',
      items: [
        {
          label: 'Sub item 1.1'
        },
        {
          label: 'Sub item 1.2'
        },
      ],
    },
    {
      label: 'item 2',
      items: [
        {
          label: 'Sub item 2.1'
        },
      ],
    },
    {
      label: 'item 3',
      items: [
        {
          label: 'Sub item 3.1'
        },
        {
          label: 'Sub item 3.2'
        },
        {
          label: 'Sub item 3.3'
        },
      ],
    },
  ]
}
