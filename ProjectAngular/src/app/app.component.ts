import { Component } from '@angular/core';

import {AngularFireDatabase, FirebaseListObservable} from 'angularfire2/database';
import { AlumnoService } from './components/alumnos/alumno.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ AlumnoService ]
})
export class AppComponent {
  title = 'app works!';
  items: FirebaseListObservable<any[]>;

  constructor(db: AngularFireDatabase) {
  	this.items = db.list('/items');
  	// console.log(db.list('/items'));
  }
}
