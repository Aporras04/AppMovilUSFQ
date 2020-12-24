import { Component, DoCheck, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiRestService } from '../api-rest.service';

@Component({
  selector: 'app-created-meetings',
  templateUrl: './created-meetings.page.html',
  styleUrls: ['./created-meetings.page.scss'],
})
export class CreatedMeetingsPage implements OnInit {

  userId = null;
  isLoaded = false;
  profMail: any;
  data: any;

  constructor(private apiRestService: ApiRestService, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.userId = this.activatedRoute.snapshot.paramMap.get("id");
    this.getPosts();
  }

  getPosts() {
    this.apiRestService.getUserById(this.userId).then(data => {
      this.profMail = data;
    })
    this.apiRestService.getNewMeetings(this.userId).then(data => {
      this.data = data;
    });
    setTimeout(() => {
      this.isLoaded = true;
    }, 500);
  }

  updateMeetingStatus(accepted, id) {
    this.apiRestService.updateMeetingStatus(accepted, id, this.profMail.correo_institucional);
    
    setTimeout(() => {
      this.apiRestService.getNewMeetings(this.userId).then(data => {
        this.data = data;
        console.log("Hola");
      });
    }, 500);
  }

  ionViewWillEnter(){
    this.apiRestService.getNewMeetings(this.userId).then(data => {
      this.data = data;
    });
  }

}
