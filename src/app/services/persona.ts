// src/app/services/persona.service.ts
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map, filter } from 'rxjs/operators';

export interface Persona {
  nombre: string;
  edad: number;
}

@Injectable({
  providedIn: 'root'
})

export class PersonaService {
  private personas: Persona[] = [
    { nombre: 'Juan', edad: 25 },
    { nombre: 'Ana', edad: 34 },
    { nombre: 'Luis', edad: 45 },
    { nombre: 'Carla', edad: 29 },
    { nombre: 'Pedro', edad: 60 }
  ];

  getPersonasMayoresDe30(): Observable<Persona[]> {
    return of(this.personas).pipe(
      map(personas => personas.filter(p => p.edad > 30))
    );
  }
}
