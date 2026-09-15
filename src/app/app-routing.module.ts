import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { PerfilComponent } from './Components/InformativeComponents/perfil/perfil.component';
import { HomeComponent } from './Components/viewsWebsite/home/home.component';
import { ExperienciaComponent } from './Components/InformativeComponents/experiencia/experiencia.component';
import { FormacionComponent } from './Components/InformativeComponents/formacion/formacion.component';
import { HabilidadesComponent } from './Components/InformativeComponents/habilidades/habilidades.component';
import { TecnologiasComponent } from './Components/InformativeComponents/tecnologias/tecnologias.component';
import { InteresesComponent } from './Components/InformativeComponents/intereses/intereses.component';


const routes: Routes = [
  
  {path: '', component: HomeComponent},
  {path: 'perfil', component: PerfilComponent},
  {path: 'experiencia', component : ExperienciaComponent},
  {path: 'formacion', component: FormacionComponent},
  {path: 'habilidades', component: HabilidadesComponent},
  {path: 'tecnologias', component: TecnologiasComponent},
  {path: 'intereses', component: InteresesComponent}

];


@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes),
    CommonModule
  ],
  exports:[RouterModule]
})
export class AppRoutingModule { }
