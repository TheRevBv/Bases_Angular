import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: [
    './listado.component.css',
    '../../../../node_modules/bootstrap/dist/css/bootstrap.min.css',
  ],
})
export class ListadoComponent {
  public heroes: string[] = [
    'Aquaman',
    'Batman',
    'Daredevil',
    'Hulk',
    'Ironman',
    'Spiderman',
  ];
  heroeBorrado: string = '';
  borrar() {
    // this.heroes.splice(0,1);
    this.heroeBorrado = this.heroes.shift() || '';
  }
}
