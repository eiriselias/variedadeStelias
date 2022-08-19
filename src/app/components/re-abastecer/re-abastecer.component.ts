import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { Producto } from 'src/app/models/productos.model';
import { DataService } from 'src/app/services/data.service';
import { ProductosService } from 'src/app/services/productos.service';

@Component({
  selector: 'app-re-abastecer',
  templateUrl: './re-abastecer.component.html',
  styleUrls: ['./re-abastecer.component.css']
})
export class ReAbastecerComponent implements OnInit {
  page:number=0;
  pageSize:number=10;

  producto:string="";
  cantidad:number=0;
  productos:Producto[] = [];
  agotados:any=[];
  normal:boolean=true;
  agotado:boolean=!this.normal;
  esta:boolean=false;
  btnAgotado:string="";  

  constructor(private productoServi:ProductosService, private data:DataService) { }

  ngOnInit(): void {
    this.productoServi.optenerProductos().subscribe((reg:any)=>{
      this.productos = Object.values(reg);
      this.productoServi.setProductos(this.productos);
      this.productos = this.productoServi.productos;
     })
     
  }
  abastecer(j:number){
    if(this.cantidad==0) return alert("debe agregar la cantidad a abastecer");
    if(this.cantidad<0){
      if( confirm("realmente desea disminuir productos?")){
        for(let i in this.productos){
          if(this.productos[i].id==j){
            this.productos[i].cantidadExistente = this.productos[i].cantidadExistente + this.cantidad;
            alert(`se quitaron ${this.cantidad *= -1} ${this.productos[i].nombre}`)
            this.cantidad = 0;
            this.data.guardarProductos(this.productos)
          }
        }
      };
    }else{
      for(let i in this.productos){
        if(this.productos[i].id==j){
          this.productos[i].cantidadExistente = this.productos[i].cantidadExistente + this.cantidad;
          alert(`hay ${this.cantidad} nuevos ${this.productos[i].nombre}`)
          this.cantidad = 0;
          this.data.guardarProductos(this.productos)
        }
      }
    }
    this.producto="";
  }
  color(cantidad:number){
       cantidad <= 5 ? this.btnAgotado="danger" : this.btnAgotado="success"
       return this.btnAgotado;
  }
  mostrarAgotados(){ 
    
    for(let i in this.productos){
      if(this.productos[i].cantidadExistente <= 5){
        if(this.agotados.length == 0)this.agotados.push(this.productos[i]);     
        this.esta = false; 
        for(let j in this.agotados){ 
          if( this.productos[i].id == this.agotados[j].id )
          this.esta = true;          
        }  
        if (!this.esta)this.agotados.push(this.productos[i]); 
      }
    }
  
    this.normal=false;    
    this.agotado=true;
  }
  mostrarTodos(){
    this.normal=true;
    this.agotado=false;
  }
  cambiarPagina(e:PageEvent){
    this.page = e.pageIndex * e.pageSize;
  }


}
