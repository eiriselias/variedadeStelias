import { Component, OnInit } from '@angular/core';
import { Producto } from 'src/app/models/productos.model';
import { ProductosService } from 'src/app/services/productos.service';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {

  productos:Producto[]=[]
  producto: any;
  acciones:boolean=false;
  id:number=0;
  modificarProducto = new FormGroup({
    nombre: new FormControl(''),    
    descripcion: new FormControl(''),
    categoria: new FormControl(''),
    cantidadExistente: new FormControl(0),
    valorUnitario: new FormControl(0),
  })

  constructor(private productoServi:ProductosService) { }

  ngOnInit(): void {
    this.productos = this.productoServi.productos
  }

  verAcciones(){
    this.acciones=!this.acciones;
  }

  selecion(i:number){    
    this.id = i;
    this.modificarProducto = new FormGroup({
      nombre: new FormControl(this.productos[i].nombre), 
      descripcion: new FormControl(this.productos[i].descripcion),
      categoria: new FormControl(this.productos[i].categoria),
      cantidadExistente: new FormControl(this.productos[i].cantidadExistente),
      valorUnitario: new FormControl(this.productos[i].valorUnitario)
    })
  }

  modificar(){
    this.producto = this.modificarProducto.value
    this.productos[this.id] = this.producto
  }
  eliminar(){
    this.productos = this.productos.filter(pro => pro != this.productos[this.id])
  } 
}
