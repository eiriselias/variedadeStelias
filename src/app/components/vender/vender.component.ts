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
  cantidad:number=1;
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
  agregar(i:number){
    if(this.cantidad > this.productos[i].cantidadExistente) return alert(`del producto ${this.productos[i].nombre} solo quedan ${this.productos[i].cantidadExistente} unidades`);
    if(this.productos[i].cantidadExistente ==0 ) return alert(`no queda ${this.productos[i].nombre} reabastecer este producto`);
    this.itemsCarro = {
      codigo: i,
      nombreProducto: this.productos[i].nombre,
      cantidad: this.cantidad,
      precio: this.productos[i].valorUnitario,
      vaTotal: this.cantidad * this.productos[i].valorUnitario
    }
    this.totalGeneral = this.totalGeneral + this.itemsCarro.vaTotal
    this.carro.push(this.itemsCarro);
    this.cantidad=1;
    alert("se agregara el producto al carro");
  }
  vendido(){   
    this.produServi.reVendido(this.carro);
    this.carro = [];
    this.totalGeneral=0;
    return alert("Productos Vendidos")
  }

  descartar(i:number): void{
    this.totalGeneral = this.totalGeneral - this.carro[i].vaTotal
    this.carro = this.carro.filter((item:any) => item != this.carro[i])     
  }

}
