import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-selector',
  templateUrl: './selector.component.html',
  styleUrls: ['./selector.component.css']
})
export class SelectorComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  clicked = false;
  buttonName = "Click Me!";
  firstName = "";
  buttonClicked(){
    this.clicked = true;
    this.buttonName = 'Clicked';
}
buttonOnMouseOver(){
  console.log('Press the button');
}
    
}
