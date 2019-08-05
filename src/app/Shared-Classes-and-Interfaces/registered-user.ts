import { Time } from '@angular/common';

export class RegisteredUser {
        Store_Name:string;
        Store_Email:string;
        Store_Phone:string;
        Store_UserName: string;
        Store_Password: string;
        TimeFrom:number;
        TImeTo:number;
        ShippingAddressesList: [{
                Zone: string,
                Street: string
              }];

}
