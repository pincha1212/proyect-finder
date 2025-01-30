import { Pipe, PipeTransform } from '@angular/core';
import { Proyecto } from '../proyectos/proyecto.model';

@Pipe({
  name: 'filter',
  standalone: true
})
export class FilterPipe implements PipeTransform {
  transform(proyectos: Proyecto[], searchText: string): Proyecto[] {
    if (!searchText) return proyectos;
    searchText = searchText.toLowerCase();
    
    return proyectos.filter(proyecto => 
      proyecto.nombre.toLowerCase().includes(searchText) ||
      proyecto.descripcion.toLowerCase().includes(searchText) ||
      proyecto.tecnologias.some(tech => 
        tech.toLowerCase().includes(searchText)
      )
    );
  }
} 