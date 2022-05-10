import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
})
// export class ListadoComponent {
//   heroes: string [] = ['Spiderman', 'Ironman', 'Hulk', 'Thor', 'Capitán America'];
//   heroesBorrados :string[] = [];
//   borrarHeroe () {
     // console.log('borrando...');
     // this.heroes.pop();
//     let heroeBorrado: string = this.heroes.shift()!;
//     console.log(heroeBorrado);
//     this.heroesBorrados.push(heroeBorrado);
//     console.log('array:', this.heroesBorrados);
//   }
// }

export class ListadoComponent {
  heroes: string [] = ['Spiderman', 'Ironman', 'Hulk', 'Thor', 'Capitán America'];
  heroeBorrado :string = '';
  borrarHeroe () {
    this.heroeBorrado = this.heroes.shift() || '';
  }
}
