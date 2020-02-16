import { AngularFireDatabase } from '@angular/fire/database';
import { Component } from '@angular/core';
import 'firebase/database';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  courses: any;
  constructor(db: AngularFireDatabase) {
    
    db.list('/courses')
    .valueChanges().subscribe(
      courses => {
        this.courses = courses;
        console.log(this.courses);
      }
    );
  }
}