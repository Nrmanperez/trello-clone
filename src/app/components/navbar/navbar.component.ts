import { Component } from '@angular/core';
import { faClose,faBell, faInfoCircle } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html'
})
export class NavbarComponent {
  isOpen = false;
  faClose = faClose;
  faBell = faBell;
  faInfoCircle = faInfoCircle;
  isOpenBody = false;
}
