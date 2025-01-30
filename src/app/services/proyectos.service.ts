import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Proyecto } from '../proyectos/proyecto.model';

@Injectable({
  providedIn: 'root'
})
export class ProyectosService {
  private dataUrl = 'assets/proyectos.json';

  constructor(private http: HttpClient) {}

  getProyectos(): Observable<Proyecto[]> {
    return this.http.get<Proyecto[]>(this.dataUrl);
  }
} 