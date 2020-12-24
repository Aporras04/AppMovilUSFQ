import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { getMaxListeners } from 'process';
import { ApiRestService } from '../api-rest.service';

@Component({
  selector: 'app-first-time',
  templateUrl: './first-time.page.html',
  styleUrls: ['./first-time.page.scss'],
})
export class FirstTimePage implements OnInit {

  email: any;

  constructor(private apiService: ApiRestService, private router: Router, private alertController: AlertController) { }

  ngOnInit() {
  }

  // sendMail(){
  //   this.apiService.sendEmail(this.email);
  //   this.router.navigateByUrl("/home");
  // }

  async sendMail() {
    if (this.email.includes("estud.usfq.edu.ec") || this.email.includes("usfq.edu.ec")) {
      this.apiService.sendEmail(this.email);
      this.router.navigateByUrl("/home");
    }else{
      const alert = await this.alertController.create({
        cssClass: 'my-custom-class',
        header: 'Error',
        message: 'Mail ingresado no corresponde a la USFQ',
        buttons: ['OK']
      })

      await alert.present();
    }
  }

}
