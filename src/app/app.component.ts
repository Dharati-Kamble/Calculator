import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatRadioModule } from '@angular/material/radio';  // Import MatRadioModule
import { FormsModule } from '@angular/forms'; // Import FormsModule
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [
    MatFormFieldModule, // Required for <mat-form-field>
    MatInputModule,     // Required for <input matInput>
    MatButtonModule,     // Required for Material buttons
    MatRadioModule,
    FormsModule,
    CommonModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent 
{
  selectedOperation: string = 'add'; // Default operation
  result: string = '0';  // Store result of operation

  calculate(num1: string, num2: string) { // Changed parameter types to string
    let number1 = parseFloat(num1); // Convert string to number
    let number2 = parseFloat(num2); // Convert string to number

    if (isNaN(number1) || isNaN(number2)) {
      this.result = 'Please enter valid numbers.';
      return;
    }

    switch (this.selectedOperation) {
      case 'add':
        this.result = (number1 + number2).toString();
        break;
      case 'sub':
        this.result = (number1 - number2).toString();
        break;
      case 'mul':
        this.result = (number1 * number2).toString();
        break;
      case 'div':
        if (number2 === 0) {
          this.result = 'Cannot divide by zero!';
        } else {
          this.result = (number1 / number2).toString();
        }
        break;
      default:
        this.result = 'Please select an operation.';
        break;
    }
  }
}
