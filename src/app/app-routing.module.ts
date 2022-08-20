import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HistorialComponent } from './components/historial/historial.component';
import { HomeComponent } from './components/home/home.component';
import { ProductosComponent } from './components/productos/productos.component';
import { ReAbastecerComponent } from './components/re-abastecer/re-abastecer.component';
import { VenderComponent } from './components/vender/vender.component';



const routes: Routes = [      
    {path:"/",component:HomeComponent, pathMatch:'full'},
    {path:"productos",component:ProductosComponent},
    {path:"vender", component:VenderComponent},
    {path:"re-abastecer", component:ReAbastecerComponent},
    {path:"historial", component:HistorialComponent},
    {path:"**", redirectTo:'/', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash:true, relativeLinkResolution:'legacy'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }