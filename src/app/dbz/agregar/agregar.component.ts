import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Personaje } from '../interfaces/personaje';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css'],
})
export class AgregarComponent {
  // @Input('data') personajes: Array<Personaje> = [];
  @Input() nuevo: Personaje = {
    nombre: '',
    poder: 0,
  };

  // @Output() onNuevoPersonaje: EventEmitter<Personaje> =
  //   new EventEmitter<Personaje>();

  constructor(private dbzService: DbzService) {}

  public agregar() {
    if (this.nuevo.nombre.trim().length === 0) {
      return;
    }
    // console.log(this.nuevo);
    // this.onNuevoPersonaje.emit(this.nuevo);
    // this.personajes.push(this.nuevo);
    this.dbzService.agregarNuevoPersonaje(this.nuevo);
    this.nuevo = {
      nombre: '',
      poder: 0,
    };
    // console.log(this.personajes);
  }
}
