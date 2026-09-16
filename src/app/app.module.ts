import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './Components/viewsWebsite/header/header.component';
import { HomeComponent } from './Components/viewsWebsite/home/home.component';
import { PerfilComponent } from './Components/InformativeComponents/perfil/perfil.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    
  ],
  imports: [
    BrowserModule,
    HeaderComponent,
    HomeComponent,
    PerfilComponent,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
