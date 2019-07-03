import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//Importar componentes

import {HomeComponent} from './home/home.component';
import {ContactoComponent} from './contacto/contacto.component';
import { EmpleadoComponent } from './empleado/empleado.component';
import { FrutaComponent} from './fruta/fruta.component';
import { CochesComponent} from './coches/coches.component';

const appRoutes: Routes = [
  {path:'',component: HomeComponent},
  {path:'pagina-principal', component: HomeComponent},
  {path: 'empleado', component: EmpleadoComponent},
  {path: 'fruta', component: FrutaComponent},
  {path:'contacto', component: ContactoComponent},
  {path:'coches', component: CochesComponent},
  {path:'contacto/:page', component: ContactoComponent},
  {path:'**', component: HomeComponent}
];

export const appRoutingProviders:any[]=[];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
