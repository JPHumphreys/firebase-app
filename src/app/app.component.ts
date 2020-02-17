import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { Component } from '@angular/core';
import 'firebase/database';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  course$;
  courses$;
  author$;

  constructor(private db: AngularFireDatabase) {
    this.courses$ = db.list('/courses').valueChanges();
    this.course$ = db.object('/courses/1').valueChanges();
    this.author$ = db.object('/authors/1').valueChanges();
  }

  add(course: HTMLInputElement) {

    firebase.database().ref('/courses').push({
      name: course.value,
      price: 150,
      isLive: true,
      sections: [
        { title: 'Components'},
        { title: 'Directives'},
        { title: 'Templetes'},
      ]
    });
    course.value = '';
  }

  update(course) {



   // firebase.database().ref('/courses/' + 0)
   // .set(course + ' UPDATED');

    // set = replaces the value
    //
  }

  delete(course){
    firebase.database().ref("/courses/" + course.$key)
    .remove()
    .then()
    .catch(err => console.log(err));
  }


}
