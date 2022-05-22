import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contador',
  templateUrl: './contador.component.html',
  styleUrls: ['../../../app/app.component.css']
})
export class ContadorComponent{

    title = 'Contador App';
    numero: number = 10;
  
    base:number = 5;
  
    acumular(num : number){
      this.numero += num;
    }

}
