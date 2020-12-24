import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { ApiRestService } from '../api-rest.service';
import { RouteStateService } from '../route-state.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(public apiService: ApiRestService, public alertController: AlertController, private router: Router, private state:RouteStateService) { }

  email: String;
  password: String;

  async checkUser() {
    let result
    result = await this.apiService.checkLogIn(this.email, this.password);
    if (result === false) {
      const alert = await this.alertController.create({
        cssClass: 'my-custom-class',
        header: 'Error',
        message: 'Mail o contrasena incorrectos',
        buttons: ['OK']
      })

      await alert.present();
    }else{
      this.router.navigateByUrl("/user-profile/" + result.id);
    }
  }

  ionViewWillEnter(){
    this.email = null;
    this.password = null;
    this.state.updatePathParamState(null);
    this.state.updateRoleState(null);
  }
}
