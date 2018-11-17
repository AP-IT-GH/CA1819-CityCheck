import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private user: firebase.User;

  constructor(public afAuth: AngularFireAuth) { 


    afAuth.authState.subscribe(user => {
			this.user = user;
    });
    
  }

  public getUser(){
    this.afAuth.authState.subscribe(user => {
			this.user = user;
    });
    return this.user;
  }



  public logIn(mail:string,pass:string){
     return this.afAuth.auth.signInWithEmailAndPassword(mail,pass);
  }


}
