import { Component, OnInit } from '@angular/core';
import { Producto } from 'src/app/models/productos.model';
import { DataService } from 'src/app/services/data.service';
import { ProductosService } from 'src/app/services/productos.service';

@Component({
  selector: 'app-re-abastecer',
  templateUrl: './re-abastecer.component.html',
  styleUrls: ['./re-abastecer.component.css']
})
export class ReAbastecerComponent implements OnInit {

  producto:string="";
  cantidad:number=0;
  productos:Producto[] = [];
  

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


}
