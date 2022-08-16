import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { ProductosComponent } from './components/productos/productos.component';
import { VenderComponent } from './components/vender/vender.component';
import { ReAbastecerComponent } from './components/re-abastecer/re-abastecer.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    ProductosComponent,
    VenderComponent,
    ReAbastecerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
