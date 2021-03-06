import { Component, OnInit } from '@angular/core';
import { Persona } from 'src/app/clases/Persona';
import { PersonaService } from 'src/app/services/persona.service';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {

  personas: Persona[];
  
  constructor(private personaService: PersonaService) { }

  ngOnInit() {
    this.personaService
      .getPersonas()
      .subscribe(personas => (this.personas = personas));
  }

}
