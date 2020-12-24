import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {ApiRestService} from '../api-rest.service';

@Component({
  selector: 'app-meeting-list',
  templateUrl: './meeting-list.page.html',
  styleUrls: ['./meeting-list.page.scss'],
})
export class MeetingListPage implements OnInit {

  userID = null;
  isLoaded=false;
  data:any;
  reject:any;

  constructor(public apiService: ApiRestService, private activatedRoute: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.userID = this.activatedRoute.snapshot.paramMap.get('id');
    this.getMeetings();
  }

  ionViewWillEnter(){
    this.getMeetings();
  }

  getMeetings(){
    this.apiService.getMeetingsById(this.userID).then(data =>{
      this.data = data;
      this.data.reverse();
    })
    this.apiService.getRejectMeetings(this.userID).then(data =>{
      this.reject =data;
      this.reject.reverse()
    })
    setTimeout(()=>{
      this.isLoaded = true;
    }, 500);
  }

  goToMeeting(id){
    this.router.navigateByUrl("info-meeting/" + this.userID + "/" + id);
  }
 
}
