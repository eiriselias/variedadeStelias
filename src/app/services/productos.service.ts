import { Injectable, ɵsetAllowDuplicateNgModuleIdsForTest } from '@angular/core';
import { Producto } from '../models/productos.model';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  productos:Producto[]=[
    {id: 1, nombre: 'balon', categoria:'deportes', descripcion: 'balon de futbol', cantidadExistente:8},
    {id: 2, nombre: 'medias', categoria:'ropa', descripcion: 'medias talla s', cantidadExistente:18},
    {id: 3, nombre: 'bombones', categoria:'dulces', descripcion: 'bombombum', cantidadExistente:30},
    {id: 4, nombre: 'pelo sintectico', categoria:'accesorios', descripcion: 'canecalon', cantidadExistente:3}  
  ]

  constructor() { }

  
  
}
