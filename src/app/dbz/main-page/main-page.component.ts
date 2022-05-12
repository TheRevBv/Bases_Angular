import { Component } from '@angular/core';
import { Personaje } from '../interfaces/personaje';
import { DbzService } from '../services/dbz.service';
@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css'],
})
export class MainPageComponent {
  // public personajes: Array<Personaje> = [];

  nuevo: Personaje = {
    nombre: 'Mtro Roshi',
    poder: 23293,
  };

  // get personajes(): Personaje[] {
  //   return this.DbzService.personajes;
  // }

  constructor(private DbzService: DbzService) {
    // this.personajes = this.DbzService.personajes;
  }
}
