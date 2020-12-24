import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {ApiRestService} from '../api-rest.service';
import { RouteStateService } from '../route-state.service';

@Component({
  selector: 'app-info-meeting',
  templateUrl: './info-meeting.page.html',
  styleUrls: ['./info-meeting.page.scss'],
})
export class InfoMeetingPage implements OnInit {

  userID = null;
  meetingId = null;
  isLoaded=false;
  data: any;
  commentProfesor: any;
  commentEstudiante: any;
  rol: any;
  email: any;
  
  constructor(public apiService: ApiRestService, private activatedRoute: ActivatedRoute, private roleState:RouteStateService) { }

  ngOnInit() {
    this.userID = this.activatedRoute.snapshot.paramMap.get('id');
    this.meetingId = this.activatedRoute.snapshot.paramMap.get('meetId')
    this.roleState.roleState.subscribe(role =>{
      this.rol = role;
    })
    this.getMeeting()
  }

  getMeeting(){
    this.apiService.getUserById(this.userID).then(data=>{
      this.email = data;
    })
    this.apiService.getMeetingInfo(this.meetingId).then(data =>{
      this.data = data;
    })
    setTimeout(()=>{
      this.isLoaded = true;
    }, 500)
  }

  updateComments(){
    if(this.rol === 2){
      this.apiService.updateMeetingComments(this.rol, this.data.id, this.commentProfesor, this.email.email);
    }else if(this.rol === 3){
      this.apiService.updateMeetingComments(this.rol, this.data.id, this.commentEstudiante, this.email.email);
    }
  }

}
