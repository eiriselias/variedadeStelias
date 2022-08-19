import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { Venta } from 'src/app/models/venta.model';
import { ProductosService } from 'src/app/services/productos.service';

@Component({
  selector: 'app-historial',
  templateUrl: './historial.component.html',
  styleUrls: ['./historial.component.css']
})
export class HistorialComponent implements OnInit {

  page:number=0;
  pageSize:number=10;

  vendidos:Venta[]=[];
  factura:any={};

  constructor(private produServi:ProductosService) { }

  ngOnInit(): void {
    this.produServi.optenerVentas().subscribe((reg:any)=>{
      this.vendidos = Object.values(reg);
      this.produServi.setVentas(this.vendidos);
      this.vendidos = this.produServi.vendidos
      this.vendidos.reverse();  
    }) 
     
  }
  detalle(fact:number){
    
    for(let i in this.vendidos){
      if(this.vendidos[i].fact==fact) this.factura = this.vendidos[i];
    }
    console.log(this.factura)
  }
  cambiarPagina(e:PageEvent){
    this.page = e.pageIndex * e.pageSize;
  }

}
