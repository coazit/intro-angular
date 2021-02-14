import { Component, Input, OnInit } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interfaces';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
})
export class AgregarComponent {
  
  @Input('dataNuevo')
  nuevo: Personaje = {
    nombre: '',
    poder: 0
  }

  @Input('dataPersonajes')
  personajes: Personaje [] = [];
  
  agregar() {
    if (this.nuevo.nombre.trim().length === 0){
      return;
    }  
    console.log(this.nuevo);
    this.personajes.push(this.nuevo);
    this.nuevo = {      
      nombre: '',
      poder: 0
    };
    console.log(this.personajes);
  }
  
}
