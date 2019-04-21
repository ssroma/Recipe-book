import { AuthService } from './../auth.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.sass']
})
export class SigninComponent implements OnInit {

  constructor(
    private authService: AuthService,
    private toastr: ToastrService
  ) { }

  ngOnInit() {
  }

  onSignIn(form: NgForm){
    const email = form.value.email;
    const password = form.value.password;
    this.authService.signInUser(email, password);

    this.authService.signinToken
      .subscribe( (done: string ) => {
        if( done.length > 40 ){
          this.toastr.success("Sing In Successfully.", "Sign In")
        }else{
          this.toastr.warning( done, "Signing In")
        }
      })

    form.reset();
  }




}
