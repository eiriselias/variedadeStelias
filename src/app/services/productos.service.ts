import { Injectable} from '@angular/core';
import { Producto } from '../models/productos.model';
import { DataService } from './data.service';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  productos:Producto[]=[]
  vendidos:any;

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
      for(let j in this.productos){
        if(carro[i].codigo == this.productos[j].id){
          this.productos[j].cantidadExistente -= carro[i].cantidad
        }
      }
    }
  }
  
  
}
