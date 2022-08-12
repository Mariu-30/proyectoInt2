import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { LogoArgComponent } from './components/logo-arg/logo-arg.component';
import { BannerComponent } from './components/banner/banner.component';
import { AcercaDeComponent } from './components/acerca-de/acerca-de.component';
import { ExpereducComponent } from './components/expereduc/expereduc.component';
import { ProgresoComponent } from './components/progreso/progreso.component';
import { ProyectosComponent } from './components/proyectos/proyectos.component';
import { FooterComponent } from './components/footer/footer.component';
import {HttpClientModule} from '@angular/common/http';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { FormsModule } from '@angular/forms';
import { interceptorProvider } from './service/interceptor-service';
import { EstudiosComponent } from './components/estudios/estudios.component';
import { NewExperienciaComponent } from './components/expereduc/new-experiencia.component';
import { EditExperienciaComponent } from './components/expereduc/edit-experiencia.component';
import { NewEducacionComponent } from './components/estudios/new-educacion.component';
import { EditEducacionComponent } from './components/estudios/edit-educacion.component';
import { NewHabilidadComponent } from './components/progreso/new-habilidad.component';
import { EditHabilidadComponent } from './components/progreso/edit-habilidad.component';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { NewProyectoComponent } from './components/proyectos/new-proyecto.component';
import { EditProyectoComponent } from './components/proyectos/edit-proyecto.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LogoArgComponent,
    BannerComponent,
    AcercaDeComponent,
    ExpereducComponent,
    ProgresoComponent,
    ProyectosComponent,
    FooterComponent,
    HomeComponent,
    LoginComponent,
    EstudiosComponent,
    NewExperienciaComponent,
    EditExperienciaComponent,
    NewEducacionComponent,
    EditEducacionComponent,
    NewHabilidadComponent,
    EditHabilidadComponent,
    NewProyectoComponent,
    EditProyectoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgCircleProgressModule.forRoot({})
  ],
  providers: [
    interceptorProvider
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
