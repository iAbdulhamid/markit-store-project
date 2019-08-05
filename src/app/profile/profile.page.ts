import { Component, OnInit } from '@angular/core';
import { UserServicesService } from '../Services/user-services.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
  client: any;
  isProfileChanged = false;
  isEnableSave = false;
  updatedUser =  {
    Client_ID: '',
    Store_Name: '',
    Store_Email: '',
    Store_Phone: '',
    Store_UserName: '',
    Store_Password: '',
    TimeFrom:0,
    TImeTo:0,
    ShippingAddressesList: [{
      Zone: '',
      Street: '',
      Building: '',
    }]
  }

  constructor(private userService:UserServicesService,private router:Router) { }

  ngOnInit() {
    // let obj = JSON.parse(localStorage.getItem('Client'));
    // this.client = obj.client ;
    // console.log(this.client);
  }

  // update() {
  //   let obj = JSON.parse(localStorage.getItem('Client'));
  //   this.client.Client_ID = obj.client.Client_ID;
  //   this.userService.updateUser(this.client).subscribe(data => {
  //     console.log(data);
  //   });
  //   this.router.navigate(['/menu']);
  //  }



}
