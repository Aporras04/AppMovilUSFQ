import { Component, OnInit, OnChanges } from '@angular/core';

import { MenuController, Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { ActivatedRoute, ActivationEnd, NavigationEnd, NavigationStart, ParamMap, Router, RoutesRecognized } from '@angular/router';
import { RouteStateService } from './route-state.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent implements OnInit{
  estudiante=false
  profesor=false
  decano = false;
  userID = null;
  role: number;

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private routeState: RouteStateService,
    private router: Router,
    private menu: MenuController
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  ngOnInit(){
    this.routeState.pathParam.subscribe(
      id => {
        this.userID = id
      }
    )
    this.routeState.roleState.subscribe(
      role => {
        this.role = role;
        this.toggleButtons();
      }
    )
  }

  toggleButtons(){
    switch(this.role){
      case 1:
        this.decano = true;
        this.profesor = false;
        this.estudiante = false;
        break;
      case 2:
        this.profesor = true;
        this.estudiante = false;
        this.decano = false;
        break;
      case 3:
        this.estudiante = true;
        this.decano = false;
        this.profesor = false;
        break;
    }
  }

  routePage(page){
    switch(page){
      case "profile":
        this.router.navigateByUrl("/user-profile/" + this.userID)
        break;
      case "tutor":
        this.router.navigateByUrl("/tutor-profile/" + this.userID)
        break;
      case "reuniones":
        this.router.navigateByUrl("/meeting-list/" + this.userID)
        break;
      case "students":
        this.router.navigateByUrl("/student-list/"+ this.userID)
        break;
      case "nueva-reunion":
        this.router.navigateByUrl("/new-meeting/"+ this.userID)
        break;
      case "reuniones-nuevas":
        this.router.navigateByUrl("/created-meetings/" + this.userID)
        break;
      case "cerrar-sesion":
        this.menu.close("main-menu");
        this.router.navigateByUrl("/home")
        break;
      case "reuniones-aceptadas":
        this.router.navigateByUrl("/accepted-meetings")
        break;
      case "reuniones-rechazadas":
        this.router.navigateByUrl("/rejected-meetings")
        break;
      case "reuniones-gpa":
        this.router.navigateByUrl("/meetings-gpa")
        break;
      case "usuarios-activos":
        this.router.navigateByUrl("/active-users")
        break;
      case "estudiante-condicionado":
        this.router.navigateByUrl("/condition-student")
        break;
      default:
        this.router.navigateByUrl("/user-profile/" + this.userID)
    }
  }
}
