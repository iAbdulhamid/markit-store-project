import { Component, OnInit } from '@angular/core';
import { UserServicesService } from '../Services/user-services.service';
import { Router } from '@angular/router';
import {Request } from '../Shared-Classes-and-Interfaces/request';
import { User } from '../Shared-Classes-and-Interfaces/user';
import { RequestService } from '../Services/request.service';
import { Observable } from 'rxjs';
import { HttpHeaders } from '@angular/common/http';
import { ResponseToUser } from '../Shared-Classes-and-Interfaces/response-to-user';
import { ResponsetouserService } from '../Services/responsetouser.service';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {
//  ischecked:boolean=false;
 total = 0;
 allTotal=0;
 RequstList:any[]=[];
 responselist:any[]=[];
 requestdetails:any[]=[]; 
 flag:number;
   token: string;
   storeDetails = {
    Zone:'',
    TimeFrom:1,
    TImeTo:12,
  };
  ischecked:boolean=false;

  Responsedetails:ResponseToUser;

  constructor(private RequestService:RequestService,private router:Router,private RestoUser:ResponsetouserService)
   {
    this.Responsedetails ={
      TotalPrice:0,
      Discount:0,
      Delivery_Time:0,
      Delivery_Cost:0,
      ItemsDetailsList: [{
        Price: 0,
        Is_Available:false,
        Available_Quantity:0 
      }]
    };
   }
   public requestid:number;
  ngOnInit() {

  // Get All Request
  let obj = JSON.parse(localStorage.getItem('Client'));
  this.token = obj.token ;
  if (this.token != null){
   this.storeDetails.Zone=obj.Store.Zone;
  this.storeDetails.TimeFrom=obj.Store.TimeFrom;
  this.storeDetails.TImeTo=obj.Store.TImeTo;
  
    this.RequestService.GetAllRequests(this.token,this.storeDetails).subscribe((data) => {
      this.RequstList = data;
    
    console.log(this.RequstList);
      

     this.router.navigate(['/menu']);

    }
    
    , (err) => {
      alert('Incorrect email or password!');
    
});
}
}

// send reponse to Client
sendResponse()
{
  console.log("send Response to user shereen");
  let obj = JSON.parse(localStorage.getItem('Client'));
  this.token = obj.token ;
  if (this.token != null){
    console.log("this is response Details");
    console.log(this.Responsedetails);
      this.RestoUser.sendResponseforUser(this.token,this.Responsedetails).subscribe((res) => {
        console.log(res);
      console.log("this is send response Result");
      console.log(res);
    },
    (err) => {
      console.log('not return data ....');
    });
  }
}
// Calculate Total Price
calculateTotalprice(item)
{
  this.total=(item.Available_Quantity*item.Price)-item.Discount;
  this.allTotal+=this.total;
  this.Responsedetails.TotalPrice=this.allTotal;
}


// get One Request
getAllrequestdetails(reqid) {
  this.flag=reqid;
  console.log("this is request ID");
  console.log(reqid);
  let obj = JSON.parse(localStorage.getItem('Client'));
  this.token = obj.token ;
  if (this.token != null){
    this.RequestService.Getrequestbyid(reqid, this.token).subscribe((res) => {
      this.requestdetails= res;
      console.log("this is requestDetails");
      console.log(this.requestdetails);
    },
    (err) => {
      console.log('not return data ....');
    });
  }
}

trackByItems(index: number, item: any): number { return item.id; }
}