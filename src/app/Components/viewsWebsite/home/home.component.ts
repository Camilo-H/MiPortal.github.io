import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PerfilComponent } from '../../InformativeComponents/perfil/perfil.component';
import { ExperienciaComponent } from '../../InformativeComponents/experiencia/experiencia.component';
import { FormacionComponent } from '../../InformativeComponents/formacion/formacion.component';
import { HabilidadesComponent } from '../../InformativeComponents/habilidades/habilidades.component';
import { InteresesComponent } from '../../InformativeComponents/intereses/intereses.component';
import { ContactoComponent } from '../../InformativeComponents/contacto/contacto.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, PerfilComponent, ExperienciaComponent, FormacionComponent,
    HabilidadesComponent, InteresesComponent, ContactoComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
 
}
