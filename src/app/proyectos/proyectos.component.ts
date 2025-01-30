// src/app/proyectos/proyectos.component.ts
import { Component, OnInit } from '@angular/core';
import { Proyecto } from './proyecto.model';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FilterPipe } from '../pipes/filter.pipe';
import { ProyectosService } from '../services/proyectos.service';

@Component({
  selector: 'app-proyectos',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    FilterPipe
  ],
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent implements OnInit {
  proyectos: Proyecto[] = [];
  buscar: string = '';
  errorMessage: string = '';

  constructor(private proyectosService: ProyectosService) {}

  ngOnInit() {
    this.proyectosService.getProyectos()
      .subscribe({
        next: (data) => {
          console.log('Datos cargados:', data); // Para verificar los datos
          this.proyectos = data;
          this.errorMessage = '';
        },
        error: (error) => {
          console.error('Error cargando proyectos:', error);
          this.errorMessage = 'Error al cargar los proyectos';
        }
      });
  }
}
