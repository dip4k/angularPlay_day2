import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-property-binding',
  templateUrl: './property-binding.component.html',
  styleUrls: ['./property-binding.component.css']
})
export class PropertyBindingComponent implements OnInit {

  inputName = "basicInput"
  inputValue = "1234";
  maxlength = 10;
  className = "red";
  constructor() { }

  ngOnInit(): void {
    setTimeout(() => {
      this.inputValue = "Dipak";
    }, 3000);
  }

  printValue(event) {
    console.log(event);
    var value = event.target.value;
    console.log("EVnet type :: " + event.type + "value : " + value);

    this.inputValue = "mangesh";
    this.maxlength = 5;
  }
  changeToBlue(event) {
    this.className = this.className == 'blue' ? 'red' : 'blue';
  }

}
