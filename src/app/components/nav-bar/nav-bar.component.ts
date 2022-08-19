import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Producto } from 'src/app/models/productos.model';
import { DataService } from 'src/app/services/data.service';
import { ProductosService } from 'src/app/services/productos.service';

@Component({
  selector: 'nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  productos:Producto[]=[];
  producto:any;

  nuevoProducto = new FormGroup({    
    nombre: new FormControl(""),
    categoria: new FormControl(""),
    descripcion: new FormControl(""),
    cantidadExistente: new FormControl(0),
    valorUnitario: new FormControl(0)
  })

  constructor(private productoServi:ProductosService, private data: DataService) { }

  ngOnInit(): void {
    this.productoServi.optenerProductos().subscribe((reg:any)=>{
      this.productos = Object.values(reg);
      this.productoServi.setProductos(this.productos);
      this.productos = this.productoServi.productos;
     }) 
  }
  agregar(){
    
    this.producto ={
      id: this.productos.length+1,
      nombre: this.nuevoProducto.value.nombre,
      categoria: this.nuevoProducto.value.categoria,
      descripcion: this.nuevoProducto.value.descripcion,
      cantidadExistente: this.nuevoProducto.value.cantidadExistente,
      valorUnitario: this.nuevoProducto.value.valorUnitario
    }
   this.productos.push(this.producto)   
   this.data.guardarProductos(this.productos)   
  }

}
