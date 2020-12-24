import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {ApiRestService} from '../api-rest.service';
import { RouteStateService } from '../route-state.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.page.html',
  styleUrls: ['./user-profile.page.scss'],
})
export class UserProfilePage implements OnInit {

  data: any;
  estudianteView: any;
  userID = null;
  isLoaded = false;

  constructor(public apiService: ApiRestService, private activatedRoute: ActivatedRoute, private routeState: RouteStateService) {}

  ngOnInit() {
    this.userID = this.activatedRoute.snapshot.paramMap.get('id');
    this.routeState.updatePathParamState(this.userID);
    this.getPosts();
  }

  getPosts() {
    this.apiService.getUserById(this.userID)
    .then(data => {
      this.data = data;
      this.routeState.updateRoleState(this.data.RolId);
    });
    setTimeout(()=>{
      this.isLoaded = true;
    }, 500);
  }
}
