import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FrutaComponent} from './fruta/fruta.component';
import {EmpleadoComponent} from './empleado/empleado.component';
import { HttpClientModule } from '@angular/common/http';
import {routing, appRoutingProviders} from './app.routing';
import {HomeComponent} from './home/home.component';
import {ContactoComponent} from './contacto/contacto.component';
import {ConversorPipes} from './pipes/conversor.pipe';
import { PlantillasComponent} from './plantillas/plantillas.component';
import { CochesComponent} from './coches/coches.component';
@NgModule({
  declarations: [
    AppComponent,
    FrutaComponent,
    EmpleadoComponent,
    HomeComponent,
    ContactoComponent,
    ConversorPipes,
    CochesComponent,
    PlantillasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    routing
  ],
  providers: [appRoutingProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
