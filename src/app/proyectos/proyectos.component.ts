import { Component, OnInit } from '@angular/core';
import { Proyecto } from './proyecto.model';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FilterPipe } from '../pipes/filter.pipe';
import { ProyectosService } from '../services/proyectos.service';

@Component({
  selector: 'app-proyectos',
  imports: [CommonModule, FormsModule, FilterPipe],
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css'],
})
export class ProyectosComponent implements OnInit {
  proyectos: Proyecto[] = [];
  buscar: string = '';
  errorMessage: string = '';
  isDarkMode = false;
  showMoreTech: boolean[] = []; // Para trackear el estado por proyecto

  constructor(private proyectosService: ProyectosService) {
    const savedTheme = localStorage.getItem('theme');
    this.isDarkMode = savedTheme === 'dark';
    this.updateTheme();
  }

  ngOnInit() {
    this.proyectosService.getProyectos().subscribe({
      next: (data) => {
        this.proyectos = data;
        this.errorMessage = '';
      },
      error: (error) => {
        this.errorMessage = 'Error al cargar los proyectos';
      },
    });
  }

  // Maneja el click en la sección de tecnologías
  handleTechClick(index: number, techLength: number) {
    if (techLength <= 3) return; // No hacer nada si hay 3 o menos
    this.toggleShowMore(index);
  }

  // Toggle para expandir/colapsar
  toggleShowMore(index: number) {
    if (this.showMoreTech[index] === undefined) {
      this.showMoreTech[index] = false;
    }
    this.showMoreTech[index] = !this.showMoreTech[index];
  }

  toggleTheme() {
    this.isDarkMode = !this.isDarkMode;
    localStorage.setItem('theme', this.isDarkMode ? 'dark' : 'light');
    this.updateTheme();
  }

  private updateTheme() {
    this.isDarkMode = localStorage.getItem('theme') === 'dark';
  }
}
