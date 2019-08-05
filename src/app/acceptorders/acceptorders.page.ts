import { Component, OnInit } from '@angular/core';
import { ResponsetouserService } from '../Services/responsetouser.service';
import { Router } from '@angular/router';
import { User } from '../Shared-Classes-and-Interfaces/user';
import { Orders } from '../Shared-Classes-and-Interfaces/orders';

@Component({
  selector: 'app-acceptorders',
  templateUrl: './acceptorders.page.html',
  styleUrls: ['./acceptorders.page.scss'],
})
export class AcceptordersPage implements OnInit {
  token:string;
  StoreEmail:string;
  orderList:Orders[]=[];

  constructor(private Acceptsords:ResponsetouserService,private route:Router) { }

  ngOnInit() {
    let obj = JSON.parse(localStorage.getItem('Client'));
    this.token = obj.token ;
    this.StoreEmail=obj.Store.Store_Email;
    this.Acceptsords.getAcceptsOrders(this.token,this.StoreEmail).subscribe(res => {
      this.orderList=res;
      console.log(res);
});
  }

}
