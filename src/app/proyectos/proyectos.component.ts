// src/app/proyectos/proyectos.component.ts
import { Component } from '@angular/core';
import { Proyecto } from './proyecto.model';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FilterPipe } from '../pipes/filter.pipe';

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
export class ProyectosComponent {
  proyectos: Proyecto[] = [
    {
      nombre: 'Weather App',
      descripcion: 'Aplicación del clima que muestra información meteorológica en tiempo real',
      tecnologias: ['HTML', 'CSS', 'JavaScript', 'API'],
      imagen: 'assets/images/weather.jpg'
    },
    {
      nombre: 'Calculadora',
      descripcion: 'Calculadora interactiva con operaciones básicas y avanzadas',
      tecnologias: ['HTML', 'CSS', 'JavaScript'],
      imagen: 'assets/images/calculator.jpg'
    },
    {
      nombre: 'Netflix Clon',
      descripcion: 'Clon de Netflix con catálogo de películas y series',
      tecnologias: ['HTML', 'CSS', 'JavaScript', 'API'],
      imagen: 'assets/images/netflix.jpg'
    },
    {
      nombre: 'Formulario Demo',
      descripcion: 'Sistema de inicio de sesión y registro con validaciones',
      tecnologias: ['HTML', 'CSS', 'JavaScript'],
      imagen: 'assets/images/auth-form.jpg'
    }
  ];

  buscar: string = '';
}
