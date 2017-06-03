import { Component, OnInit } from '@angular/core';

import {AngularFireDatabase, FirebaseListObservable} from 'angularfire2/database';
import {AngularFireAuth} from 'angularfire2/auth';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
  })
export class HomeComponent implements OnInit {
  items: FirebaseListObservable<any[]>;

  constructor(public afAuth: AngularFireAuth, db: AngularFireDatabase) {
  	this.items = db.list('/items');
  	console.log(db.list('/items'));
  }

  ngOnInit() {
  }

}
