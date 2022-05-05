import { Component } from '@angular/core';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styleUrls: ['../../app.component.css'],
})
export class HeroeComponent {
  public nombre: string = 'Ironman';
  public edad: number = 45;

  get getNombreCapitalizado(): string {
    return this.nombre.toUpperCase();
  }
  obtenerNombre(): string {
    return `${this.nombre} - ${this.edad}`;
  }

  cambiarNombre(nombre: string): void {
    this.nombre = nombre;
  }

  cambiarEdad(edad: number): void {
    this.edad = edad;
  }

  constructor() {}
}
