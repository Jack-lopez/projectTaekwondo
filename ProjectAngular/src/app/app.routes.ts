import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { AlumnoListaComponent } from './components/alumnos/alumno-lista.component';
import { NosotrosComponent } from './components/nosotros/nosotros.component';
import { IngresarComponent } from './components/ingresar/ingresar.component';
import { ContactoComponent} from './components/contacto/contacto.component';

const APP_ROUTES: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginPageComponent },
  { path: 'alumnos', component: AlumnoListaComponent },
  { path: 'nosotros', component: NosotrosComponent },
  { path: 'ingresar', component: IngresarComponent },
  { path: 'contacto', component: ContactoComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);
