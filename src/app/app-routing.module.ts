import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccionVenderComponent } from './components/accion-vender/accion-vender.component';
import { ProductosComponent } from './components/productos/productos.component';
import { VenderComponent } from './components/vender/vender.component';



const routes: Routes = [      
    {path:"productos",component:ProductosComponent},
    {path:"vender", component:VenderComponent},
    {path:"aVender/:id", component:AccionVenderComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }