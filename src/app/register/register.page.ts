import { Component, OnInit } from '@angular/core';
import { RegisteredUser } from '../Shared-Classes-and-Interfaces/registered-user';
import { UserServicesService } from '../Services/user-services.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  registeredUser:RegisteredUser;
  items:any=[];
 
  constructor(private  userservice:UserServicesService ,private router:Router) {
    this.registeredUser =  {
      Store_Name: '',
      Store_Email: '',
      Store_Phone: '',
      Store_UserName: '',
      Store_Password: '',
      TimeFrom:1,
      TImeTo:10,
      ShippingAddressesList: [{
        Zone: '',
        Street: ''  
      }]
    };
    this.items = [
      { expanded: false }
    ];
  
  }
        
  ngOnInit() {
  }

  register() {
    console.log(this.registeredUser);
    this.userservice.registerNewUser(this.registeredUser).subscribe(data => {
      console.log(data);
    });
    this.router.navigate(['/menu']);
   }
   
  expandItem(item): void {
    if (item.expanded) {
      item.expanded = false;
    } else {
      this.items.map(listItem => {
        if (item == listItem) {
          listItem.expanded = !listItem.expanded;
        } else {
          listItem.expanded = false;
        }
        return listItem;
      });
    }  

}
   
}
