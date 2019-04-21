import { Injectable, Output, EventEmitter } from '@angular/core';

import * as firebase from 'firebase';
import { Router, ActivatedRoute } from '@angular/router';
  


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  token: string;
  @Output() signinToken = new EventEmitter<any>();

  constructor(
    private router: Router,
    private route: ActivatedRoute
  ) { }

  signUpUser(email: string, password: string){
    firebase.auth().createUserWithEmailAndPassword(email, password)
      .then((response) => {
        this.signinToken.next(response.operationType);
        
      })
      .catch( (error) => {
        this.signinToken.next(error);
      })
  }

  signInUser(email: string, password: string){
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then( (response) => {
        firebase.auth().currentUser.getIdToken()
          .then( token => {
            this.token = token;
            this.signinToken.next(token);
            this.router.navigate(['/']);
          })
      })
      .catch( (error) => {
        this.signinToken.next(error.code);
      }) 
  }

  getToken(){
    firebase.auth().currentUser.getIdToken()
      .then( token => {
       this.token = token;
      })
    return this.token;
    
  }

  isAuthenticated(){
    return this.token != null
  }

  logOut(){
    firebase.auth().signOut();
    this.token = null;
  }


}
