import { Component, OnInit } from '@angular/core';
import { Producto } from 'src/app/models/productos.model';
import { ProductosService } from 'src/app/services/productos.service';

@Component({
  selector: 'vender',
  templateUrl: './vender.component.html',
  styleUrls: ['./vender.component.css']
})
export class VenderComponent implements OnInit {

  docuUsuario:number=0;
  nombreUsuario:string="";
  celUsuario:number=0;

  codigo:number=0;
  nombreProducto:string="";
  cantidad:number=0;
  precio:number=0;
  vaTotal:number=0;

  carro:any=[];
  itemsCarro:any={};
  totalGeneral:number=0;

  productos:Producto[]=[]

  constructor(private produServi:ProductosService) { }

  ngOnInit(): void {
    this.productos = this.produServi.productos
  }

  buscar(){
    for(let i=0; this.productos.length; i++){
      if(this.nombreProducto == this.productos[i].nombre){
        this.codigo = i;
        this.precio = this.productos[i].valorUnitario;
        this.vaTotal = this.cantidad * this.productos[i].valorUnitario;
      }
    }
  }
  agregar(){
    this.itemsCarro = {
      codigo: this.codigo,
      nombreProducto: this.nombreProducto,
      cantidad: this.cantidad,
      precio: this.precio,
      vaTotal: this.vaTotal
    }
    this.totalGeneral = this.totalGeneral + this.itemsCarro.vaTotal
    this.carro.push(this.itemsCarro);
  }
  vendido(){
    alert("Productos Vendidos")
  }

}
