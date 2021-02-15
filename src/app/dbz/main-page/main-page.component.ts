import { Component} from '@angular/core';
import { Personaje } from '../interfaces/dbz.interfaces';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
})
export class MainPageComponent{
  
  nuevo: Personaje = {
    nombre: 'Maestro Roshhi',
    poder: 100
  }

  // get personajes(): Personaje[] {
  //   return this.DbzService.personajes;
  // }

  // agregarNuevoPersonaje( argumento: Personaje) {    
  //   this.personajes.push(argumento);
  // }

  constructor(){
    
  }
  
}
