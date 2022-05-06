import { Component } from '@angular/core';

import { Personaje } from '../interfaces/personaje';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css'],
})
export class MainPageComponent {
  personajes: Array<Personaje> = [
    {
      nombre: 'Joshua',
      poder: 100000,
    },
    {
      nombre: 'Juan',
      poder: 1,
    },
  ];

  nuevo: Personaje = {
    nombre: 'Mtro Roshi',
    poder: 23293,
  };
}
