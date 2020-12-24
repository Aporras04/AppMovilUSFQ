import { Component, OnInit } from '@angular/core';
import { ApiRestService } from '../api-rest.service';

@Component({
  selector: 'app-rejected-meetings',
  templateUrl: './rejected-meetings.page.html',
  styleUrls: ['./rejected-meetings.page.scss'],
})
export class RejectedMeetingsPage implements OnInit {

  isLoaded = false;
  data: any;

  constructor(private apiService: ApiRestService) { }

  ngOnInit() {
    this.getPosts();
  }

  getPosts(){
    this.apiService.getAllRejected().then(data =>{
      this.data = data;
    })

    setTimeout(()=>{
      this.isLoaded = true;
    }, 300);
  }

}
