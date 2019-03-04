import { Component, OnInit } from '@angular/core';
import { Customer} from '../customer';
import { CUSTOMERS} from './mockcustomer';


@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit {
  
 customer:Customer={id:0, name:"", email:""};
 customers=CUSTOMERS;
 
  constructor() { }
  
  
  
  addCustomer(){
    if(this.customer.name.length>0 && this.customer.email.length>0 ){
      this.customer.id=this.customers.length +1;
      this.customers.push(this.customer);
      this.customer={id:0, name:"", email:""};
    }
  
    
  }

  removeCustomer(num){
    var customerList:Customer[]=[];
    for(var i=0;i<this.customers.length;i++)
    {
      if(this.customers[i].id!=num)
      {
        customerList.push(this.customers[i]);
      }
    }
  this.customers=customerList;
  
  }


  ngOnInit() {
  }

}
