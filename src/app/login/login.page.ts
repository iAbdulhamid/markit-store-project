import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserServicesService } from '../Services/user-services.service';
import { User } from '../Shared-Classes-and-Interfaces/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  currentUser:User;
  userData = {
    Store_Email:'',
    Store_Password:''
  };

  constructor(private route:Router,private userServices:UserServicesService) { }

  ngOnInit() {
  }
  login() {
    alert(JSON.stringify(this.userData));

    this.userServices.getUserData(this.userData).subscribe((data) => {
       console.log(data);
       this.currentUser = data;
       localStorage.setItem('Client', JSON.stringify(this.currentUser));
       this.route.navigate(['/menu']);
     }
      , (err) => {
        alert('Incorrect email or password!');
});
  }
  

}
