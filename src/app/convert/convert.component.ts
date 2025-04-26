import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

//Importerar formsmodule för datbinding
// ngif för if-sats i html
@Component({
  selector: 'app-convert',
  imports: [FormsModule, NgIf],
  templateUrl: './convert.component.html',
  styleUrl: './convert.component.css'
})

//Variabler
export class ConvertComponent {
  num1: number = 0;
  result: number = 0;
  type: 'C' | 'F' | 'M' | 'FT' = 'C';
  othertype: string = "Fahreneit";
  firsttype: string = "";
  showresult: boolean = false;

//Funktion för uträkningar
convert(): void {
  this.printUnit();
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
//visa dölj resultatrutan
this.showresult = true;
}

//funktion för att visa värden i klartext
printUnit(): void {
  this.result = 0;
  switch (this.type) {
    case 'C':
      this.othertype = "fahrenheit";
      this.firsttype = "celsius"
      break;
    case 'F':
      this.othertype = "celsius";
      this.firsttype = "fahrenheit"
      break;
    case 'M':
      this.othertype = "fot (feet)";
      this.firsttype = "meter"
      break;
    case 'FT':
      this.othertype = "meter";
      this.firsttype = "fot (feet)"
      break;
    default:
      this.othertype = "";
      this.firsttype = "";
      break;
  }
//visa dölj resultatrutan
  this.showresult = false;
}

hide(): void {
  this.showresult = false;
}
}



