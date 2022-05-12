import { Injectable } from '@angular/core';
import { Personaje } from '../interfaces/personaje';

@Injectable()
export class DbzService {
  private _personajes: Array<Personaje> = [
    {
      nombre: 'Joshua',
      poder: 100000,
    },
    {
      nombre: 'Juan',
      poder: 1,
    },
  ];
  get personajes(): Personaje[] {
    return [...this._personajes];
  }
  constructor() {
    console.log('Servicio Inicializado');
  }
  agregarNuevoPersonaje(personaje: Personaje) {
    this._personajes.push(personaje);
  }
}
