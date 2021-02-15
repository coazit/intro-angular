import { Component} from '@angular/core';
import { Personaje } from '../interfaces/dbz.interfaces';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
})
export class MainPageComponent{

  personajes: Personaje [] = [
    {
      nombre: 'Goku',
      poder: 150000
    },
    {
      nombre: 'Vegeta',
      poder:7500
    }
  ];

  nuevo: Personaje = {
    nombre: 'Maestro Roshhi',
    poder: 100
  }

  agregarNuevoPersonaje( argumento: Personaje) {    
    this.personajes.push(argumento);
  }

  constructor(private DbzService: DbzService){}
  
}
