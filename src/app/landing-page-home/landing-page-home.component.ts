import { Component } from '@angular/core';

@Component({
  selector: 'app-landing-page-home',
  templateUrl: './landing-page-home.component.html',
  styleUrls: ['./landing-page-home.component.scss']
})
export class LandingPageHomeComponent {
  menuItems = ['About', 'Careers', 'Events', 'Products', 'Support']
}
