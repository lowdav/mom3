import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-convert',
  imports: [FormsModule],
  templateUrl: './convert.component.html',
  styleUrl: './convert.component.css'
})
export class ConvertComponent {
  num1: number = 0;
  result: number = 0;
  type: 'C' | 'F' | 'M' | 'FT' = 'C';
  othertype: string = "Fahrenheit";


convert(): void {
  switch (this.type) {
    case 'C':
      this.result = parseFloat(((this.num1 * 9 / 5) + 32).toFixed(1));
      break;
    case 'F':
      this.result = parseFloat(((this.num1 - 32) * 5 / 9).toFixed(1));
      break;
    case 'M':
      this.result = parseFloat((this.num1 * 3.28084).toFixed(2));
      break;
    case 'FT':
      this.result = parseFloat((this.num1 / 3.28084).toFixed(2));
      break; 
}
}


printUnit(): void {
  this.result = 0;
  switch (this.type) {
    case 'C':
      this.othertype = "Fahrenheit";
      break;
    case 'F':
      this.othertype = "Celsius";
      break;
    case 'M':
      this.othertype = "Fot (Feet)";
      break;
    case 'FT':
      this.othertype = "Meter";
      break;
    default:
      this.othertype = "";
      break;
  }
}
}



