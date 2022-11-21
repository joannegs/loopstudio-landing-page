import { Component } from '@angular/core';
import { creations } from './../creations';

@Component({
  selector: 'app-creations-page',
  templateUrl: './creations-page.component.html',
  styleUrls: ['./creations-page.component.scss']
})
export class CreationsPageComponent {
  creationsList = creations;
}
