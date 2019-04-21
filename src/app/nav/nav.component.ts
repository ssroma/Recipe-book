import { Component, OnInit } from '@angular/core';

import { DataStorageService } from './../shared/data-storage.service';
import { AuthService } from './../auth/auth.service';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.sass']
})
export class NavComponent implements OnInit {

  constructor(
    private dataStorage: DataStorageService,
    private authService: AuthService,
    private toastr: ToastrService
  ) { }

  ngOnInit() {
  }

  onSaveData(){
    this.dataStorage.storeRecipes()
      .subscribe( (response: Response) => {
        console.log(response);
      })
  }

  onFetchData(){
    this.dataStorage.retriveRecipes();
  }

  onLogOut(){
    this.authService.logOut();
    this.toastr.error("Logged Out", "Thanks");
  }

}
