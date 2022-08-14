import { Component, OnInit } from '@angular/core';
import { Producto } from 'src/app/models/productos.model';
import { ProductosService } from 'src/app/services/productos.service';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {

  productos:Producto[]=[]
  acciones:boolean=false;

  constructor(private productoServi:ProductosService) { }

  ngOnInit(): void {
    this.productos = this.productoServi.productos
  }

  verAcciones(i:number){
    this.acciones=!this.acciones;
    console.log(`se dio click en ${i}`)
  }

}
