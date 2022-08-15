import { Injectable, ɵsetAllowDuplicateNgModuleIdsForTest } from '@angular/core';
import { Producto } from '../models/productos.model';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  productos:Producto[]=[
    {nombre: 'balon', categoria:'deportes', descripcion: 'balon de futbol', cantidadExistente:8, valorUnitario: 9000},
    {nombre: 'medias', categoria:'ropa', descripcion: 'medias talla s', cantidadExistente:18, valorUnitario: 3000},
    {nombre: 'bombones', categoria:'dulces', descripcion: 'bombombum', cantidadExistente:30, valorUnitario: 500},
    {nombre: 'pelo sintectico', categoria:'accesorios', descripcion: 'canecalon', cantidadExistente:3, valorUnitario: 12000}  
  ]

  constructor() { }

  
  
}
