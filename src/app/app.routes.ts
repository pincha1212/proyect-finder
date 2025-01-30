import { Routes } from '@angular/router';
import { ProyectosComponent } from './proyectos/proyectos.component';

export const routes: Routes = [
  { path: '', component: ProyectosComponent },  // Ruta principal
  { path: 'proyectos', component: ProyectosComponent }
];
