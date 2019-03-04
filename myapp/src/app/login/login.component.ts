import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  
 
  data = {username:"",password:""};
  
  
  constructor(private router: Router) { }

  
  onLogin(){
  	if(this.data.username == this.data.password){
      this.router.navigate(['./menu']);
  	}else{
      alert('username / password is not correct.');
      
  	}
  }
msg(){
  this.router.navigate(['./aboutus']);
}

}
