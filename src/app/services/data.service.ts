import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Producto } from '../models/productos.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private httpClient:HttpClient) { }
  cargarProductos(){
    return this.httpClient.get('https://variedadestelias-default-rtdb.firebaseio.com/data.json');
  }

  guardarProductos(productos:Producto[]){

    this.httpClient.put('https://variedadestelias-default-rtdb.firebaseio.com/data.json', productos).subscribe(
      response => console.log("se han guardado los ususarios"+response),
      error => console.log("Error: "+ error)
    )
  }

  cargarVentas(){
    return this.httpClient.get('https://variedadestelias-default-rtdb.firebaseio.com/ventas.json');
  }

  guardarVentas(ventas:any){

    this.httpClient.put('https://variedadestelias-default-rtdb.firebaseio.com/ventas.json', ventas).subscribe(
      response => console.log("se han guardado los ususarios"+response),
      error => console.log("Error: "+ error)
    )
  }

}
