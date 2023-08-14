import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage {

  public valor1: number = 0;
  public valor2: number = 0;
  public operacao: string | undefined;
  public resultado: number = 0;

  constructor(private alertController: AlertController) {}

  calcular() {
    
    switch (this.operacao) {
      case 'Dividir':
        this.resultado = this.valor1 / this.valor2;
        break;
     
        case 'Somar':
        this.resultado = this.valor1 + this.valor2;
        break;
      
        case 'Diminuir':
        this.resultado = this.valor1 - this.valor2;
        break;
      
        case 'Multiplicar':
        this.resultado = this.valor1 * this.valor2;
        break;
      default:
        this.resultado = 0;
        break;
    }
  }

  limparCampos() {
    this.valor1 = 0;
    this.valor2 = 0;
    this.operacao = '';
    this.resultado = 0;
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
