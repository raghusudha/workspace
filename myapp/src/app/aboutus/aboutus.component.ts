import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'aboutus',
  templateUrl: './aboutus.component.html',
  styleUrls: ['./aboutus.component.css']
})
export class AboutusComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  msg(){
    alert("Hello world")
    this.router.navigate(['./aboutus']);
  }


}
