import { Injectable} from '@angular/core';
import { Producto } from '../models/productos.model';
import { DataService } from './data.service';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  productos:Producto[]=[]

  constructor( private dataFire: DataService) { }
  optenerProductos(){
    return this.dataFire.cargarProductos();
  }
  setProductos(misProductos:any){
    this.productos = misProductos;
  }

  optenerUno(i:number){
    return this.productos[i];
  }

  reVendido(carro:any){
    for(let i in carro){
      this.productos[carro[i].codigo].cantidadExistente = this.productos[carro[i].codigo].cantidadExistente - carro[i].cantidad;
    }
  }
  
  
}
