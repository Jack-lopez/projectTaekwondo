import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { APP_ROUTING } from './app.routes';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { AlumnoListaComponent } from './components/alumnos/alumno-lista.component';
import { NosotrosComponent } from './components/nosotros/nosotros.component';
import { IngresarComponent } from './components/ingresar/ingresar.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { BotonContactoComponent } from './components/contacto/boton-contacto.component';
import { LoginPageComponent } from './components/login-page/login-page.component';

// firebase 
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    AlumnoListaComponent,
    NosotrosComponent,
    IngresarComponent,
    ContactoComponent,
    BotonContactoComponent,
    LoginPageComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    APP_ROUTING,
    // AngularFireDatabaseModule, // imports firebase/database, only needed for database features
    AngularFireModule.initializeApp(environment.firebase, 'culebrita'),
    AngularFireDatabaseModule, // imports firebase/database, only needed for database features
    AngularFireAuthModule, // imports firebase/auth, only needed for auth features
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
