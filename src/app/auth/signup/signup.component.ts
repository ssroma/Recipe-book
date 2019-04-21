import { Component, OnInit } from '@angular/core';

import { NgForm } from '@angular/forms';
import { AuthService } from '../auth.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.sass']
})
export class SignupComponent implements OnInit {

  constructor(
    private authService: AuthService,
    private toastr: ToastrService
  ) { }

  ngOnInit() {
  }

  onSignUp(form: NgForm){
    const email = form.value.email;
    const password = form.value.password;
    this.authService.signUpUser(email, password);
    this.authService.signinToken
      .subscribe( (singUp: any) => {
        if( singUp == 'signIn'){
          this.toastr.success("Sing Up Successfully.", "Sign Up")
        }else{
          this.toastr.warning( singUp, "Signing Up")
        }
      })

    form.reset();
  }


}
