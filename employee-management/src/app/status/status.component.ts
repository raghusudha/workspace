import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-status',
  templateUrl: './status.component.html',
  styleUrls: ['./status.component.css']
})
export class StatusComponent implements OnInit {

  constructor(private router: Router) { }
 

  ngOnInit() {
  }
  onStatus(){
  	
      this.router.navigate(['./menu']);
  	}
      
  	

}
