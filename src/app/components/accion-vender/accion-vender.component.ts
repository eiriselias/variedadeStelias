import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import { Producto } from 'src/app/models/productos.model';
import { ProductosService } from 'src/app/services/productos.service';

@Component({
  selector: 'accion-vender',
  templateUrl: './accion-vender.component.html',
  styleUrls: ['./accion-vender.component.css']
})
export class AccionVenderComponent implements OnInit {

  producto:any;

  constructor(private ruta:ActivatedRoute, private produServi:ProductosService ) { 
    this.ruta.params.subscribe(rut=>{
      this.producto = this.produServi.optenerUno(rut['id'])
    })
  }

  ngOnInit(): void {

    
    console.log(this.producto.nombre)
  }

}
