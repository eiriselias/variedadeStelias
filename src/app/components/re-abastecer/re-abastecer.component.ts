import { Component, OnInit } from '@angular/core';
import { Producto } from 'src/app/models/productos.model';
import { ProductosService } from 'src/app/services/productos.service';

@Component({
  selector: 'app-re-abastecer',
  templateUrl: './re-abastecer.component.html',
  styleUrls: ['./re-abastecer.component.css']
})
export class ReAbastecerComponent implements OnInit {

  codigo:number=0;
  producto:string="";
  cantidad:number=0;
  nuevos:number=0;
  novedad:boolean=false;
  abastece: any;
  productos:Producto[] = [];
  

  constructor(private produServi:ProductosService) { }

  ngOnInit(): void {
    this.productos = this.produServi.productos;
  }
  buscar(){
    this.producto = this.productos[this.codigo].nombre;
    this.cantidad = this.productos[this.codigo].cantidadExistente;
  }
  abastecer(){
    if(this.productos[this.codigo].cantidadExistente < this.cantidad){
      this.nuevos = this.cantidad - this.productos[this.codigo].cantidadExistente
      this.productos[this.codigo].cantidadExistente = this.cantidad;
      this.producto = "";
      this.cantidad = 0;      
      this.novedad=true;
    }else{
      alert("el abastecimiento debe contener un valor mayor al anterior");
      this.novedad=false;
    }
  }


}
