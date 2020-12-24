import { Component, OnInit } from '@angular/core';
import { ApiRestService } from '../api-rest.service';

@Component({
  selector: 'app-accepted-meetings',
  templateUrl: './accepted-meetings.page.html',
  styleUrls: ['./accepted-meetings.page.scss'],
})
export class AcceptedMeetingsPage implements OnInit {

  isLoaded = false;
  data: any;

  constructor(private apiService: ApiRestService) { }

  ngOnInit() {
    this.getPosts();
  }

  getPosts(){
    this.apiService.getAllAccepted().then(data =>{
      this.data = data;
    })

    setTimeout(()=>{
      this.isLoaded = true;
    }, 300);
  }

}
