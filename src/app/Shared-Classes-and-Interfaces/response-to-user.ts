export class ResponseToUser {
  // forEach(arg0: (element: any) => void) {
  //   throw new Error("Method not implemented.");
  // }
    TotalPrice:number;
    Discount:number;
    Delivery_Time:number;
    Delivery_Cost:number;
    ItemsDetailsList: [{
        Price:number,
        Is_Available:boolean,
        Available_Quantity:number
      }];
}
