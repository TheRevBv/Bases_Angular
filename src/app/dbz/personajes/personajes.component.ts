import { Component, Input } from '@angular/core';
import { Personaje } from '../interfaces/personaje';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html',
  styleUrls: ['./personajes.component.css'],
})
export class PersonajesComponent {
  // @Input('data') personajes: Array<Personaje> = [];
  get personajes() {
    return this.dbzService.personajes;
  }
  constructor(private dbzService: DbzService) {}
}
