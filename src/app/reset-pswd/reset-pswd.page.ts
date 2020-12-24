import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { ApiRestService } from '../api-rest.service';

@Component({
  selector: 'app-reset-pswd',
  templateUrl: './reset-pswd.page.html',
  styleUrls: ['./reset-pswd.page.scss'],
})
export class ResetPswdPage implements OnInit {

  email: any;
  password = null;
  passwordConfirm = null;
  user: any;

  constructor(private apiService: ApiRestService, public alertController: AlertController, private router: Router) { }

  ngOnInit() {
  }

  getUser(){
    return this.apiService.getUserByEmail(this.email)
  }

  async changePassword(){
    this.user = await this.getUser();
    if(this.password === this.passwordConfirm && this.password != null){
      this.apiService.setPassword(this.user.id, this.password);
      this.router.navigateByUrl("/home");
    }else{
      const alert = await this.alertController.create({
        cssClass: 'my-custom-class',
        header: 'Error',
        message: 'Contraseñas no coinciden',
        buttons: ['OK']
      })

      await alert.present();
    }
    
  }

}
