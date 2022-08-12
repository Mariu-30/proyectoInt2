import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditEducacionComponent } from './components/estudios/edit-educacion.component';
import { NewEducacionComponent } from './components/estudios/new-educacion.component';
import { EditExperienciaComponent } from './components/expereduc/edit-experiencia.component';
import { NewExperienciaComponent } from './components/expereduc/new-experiencia.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { EditHabilidadComponent } from './components/progreso/edit-habilidad.component';
import { NewHabilidadComponent } from './components/progreso/new-habilidad.component';
import { EditProyectoComponent } from './components/proyectos/edit-proyecto.component';
import { NewProyectoComponent } from './components/proyectos/new-proyecto.component';

const routes: Routes = [
  {path:'', component: HomeComponent},
  {path:'login', component: LoginComponent},
  { path: 'nuevaexp', component: NewExperienciaComponent},
  { path:'editexp/:id', component: EditExperienciaComponent},
  { path:'nuevaedu', component: NewEducacionComponent},
  { path:'editedu/:id', component: EditEducacionComponent},
  { path:'nuevahab', component: NewHabilidadComponent},
  { path:'edithab/:id', component: EditHabilidadComponent},
  { path:'nuevoproy', component: NewProyectoComponent},
  { path:'editproy/:id', component: EditProyectoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
