import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PersonaService, Persona } from '../../services/persona';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-personas',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './personas.html',
  styleUrls: ['./personas.css']
})

export class Personas implements OnInit {
  personasMayores$!: Observable<Persona[]>;

  constructor(private personaService: PersonaService) {}

  ngOnInit(): void {
    this.personasMayores$ = this.personaService.getPersonasMayoresDe30();
  }
}
