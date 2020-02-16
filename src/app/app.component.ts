import { AngularFireDatabase } from '@angular/fire/database';
import { Component, OnDestroy } from '@angular/core';
import 'firebase/database';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  
  courses$;

  constructor(db: AngularFireDatabase) {
    this.courses$ = db.list('/courses').valueChanges();
  }



}
