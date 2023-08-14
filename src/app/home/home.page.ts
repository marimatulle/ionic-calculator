import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  public displayValue: string = '';
  public firstNumber: number | null = null;
  public secondNumber: number | null = null;
  public operation: string | null = null;

  constructor(private alertController: AlertController) {}

  addDigit(digit: number) {
    this.displayValue += digit.toString();
  }

  selectOperation(op: string) {
    if (this.firstNumber === null) {
      this.firstNumber = parseFloat(this.displayValue);
      this.operation = op;
      this.displayValue = this.firstNumber + ' ' + this.operation + ' ';
    }
  }

  calculate() {
    if (this.firstNumber !== null && this.operation !== null && this.displayValue !== '') {
      const displayParts = this.displayValue.split(' ');
      this.secondNumber = parseFloat(displayParts[2]);

      switch (this.operation) {
        case '+':
          this.displayValue = (this.firstNumber + this.secondNumber).toString();
          break;
        case '-':
          this.displayValue = (this.firstNumber - this.secondNumber).toString();
          break;
        case '*':
          this.displayValue = (this.firstNumber * this.secondNumber).toString();
          break;
        case '/':
          if (this.secondNumber !== 0) {
            this.displayValue = (this.firstNumber / this.secondNumber).toString();
          } else {
            this.presentAlert('Error', 'Division by zero is not allowed.');
            this.clear();
          }
          break;
      }

      this.firstNumber = null;
      this.secondNumber = null;
      this.operation = null;
    }
  }

  clear() {
    this.displayValue = '';
    this.firstNumber = null;
    this.secondNumber = null;
    this.operation = null;
  }

  async presentAlert(subHeader: string, message: string) {
    const alert = await this.alertController.create({
      header: 'Calculator',
      subHeader: subHeader,
      message: message,
      buttons: ['OK'],
    });

    await alert.present();
  }
}
