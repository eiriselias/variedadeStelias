import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { ProductosComponent } from './components/productos/productos.component';
import { VenderComponent } from './components/vender/vender.component';
import { ReAbastecerComponent } from './components/re-abastecer/re-abastecer.component';
import { FilterPipe } from './pipes/filter.pipe';
import { HomeComponent } from './components/home/home.component';
import { FooterComponent } from './components/footer/footer.component';
import { DataService } from './services/data.service';
import { HttpClientModule } from '@angular/common/http';
import { HistorialComponent } from './components/historial/historial.component';
import { MatPaginatorModule } from '@angular/material/paginator'

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    ProductosComponent,
    VenderComponent,
    ReAbastecerComponent,
    FilterPipe,
    HomeComponent,
    FooterComponent,
    HistorialComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    MatPaginatorModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
