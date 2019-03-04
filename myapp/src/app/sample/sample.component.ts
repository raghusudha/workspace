import { Component, OnInit } from '@angular/core';
import { text } from '@angular/core/src/render3';

@Component({
  selector: 'app-sample',
  templateUrl: './sample.component.html',
  styleUrls: ['./sample.component.css']
})
export class SampleComponent implements OnInit {
  buttons=[{name:"1"},{name:"2"}];


  constructor() { }
  addButton(){
    var newButton={name:""+(this.buttons.length+1)};
    this.buttons.push(newButton);{
}

  }
  removeButton(button){
    this.buttons.splice(button,button);
    
  }
    ngOnInit() {
  }
  
}
