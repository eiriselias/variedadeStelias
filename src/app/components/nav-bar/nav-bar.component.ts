import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ProductosService } from 'src/app/services/productos.service';

@Component({
  selector: 'nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  productos: any;

  nuevoProducto = new FormGroup({
    nombre: new FormControl(""),
    categoria: new FormControl(""),
    descripcion: new FormControl(""),
    cantidadExistente: new FormControl(0),
    valorUnitario: new FormControl(0)
  })

  constructor(private productoServi:ProductosService) { }

  ngOnInit(): void {
    this.productos = this.productoServi.productos;
  }
  agregar(){
   this.productos.push(this.nuevoProducto.value)
  }

}
