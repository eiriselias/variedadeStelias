import { Component, OnInit } from '@angular/core';
import { Producto } from 'src/app/models/productos.model';
import { DataService } from 'src/app/services/data.service';
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

  constructor(private productoServi:ProductosService, private data:DataService) { }

  ngOnInit(): void {
    this.productoServi.optenerProductos().subscribe((reg:any)=>{
      this.productos = Object.values(reg);
      this.productoServi.setProductos(this.productos);
      this.productos = this.productoServi.productos;
     })
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
    this.data.guardarProductos(this.productos)
  }
  vendido(){   
    this.productoServi.reVendido(this.carro);
    this.carro = [];
    this.totalGeneral=0;
    this.data.guardarProductos(this.productos)
    return alert("Productos Vendidos")    
  }

  descartar(i:number): void{
    this.totalGeneral = this.totalGeneral - this.carro[i].vaTotal
    this.carro = this.carro.filter((item:any) => item != this.carro[i])     
  }

}
