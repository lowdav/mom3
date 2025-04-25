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
  temptype: 'C' | 'F' = 'C';
  othertype: string = "Fahrenheit";


ConvertTemp(): void {
  if (this.temptype === 'C') {
    this.result = Math.round(this.num1 * 9 / 5) + 32;
  } else {
    this.result = Math.round((this.num1 - 32) * 5 / 9);
  }
}

printUnit(): void {
  this.result = 0;
  if (this.temptype === 'C') {
    this.othertype = "Fahrenheit";
  } else {
    this.othertype = "Celsius"; 
  }
}

}



