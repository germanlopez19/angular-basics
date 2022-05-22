import { Component} from '@angular/core';


@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent {

  heroes: string[] = ['Spiderman', 'Ironman', 'Hulk', 'Thor']
  hero: string ='';

  borrarHeroe(){
    //this.heroes.length = this.heroes.length-1;
    this.hero =  this.heroes.shift() || '';
  }

}
