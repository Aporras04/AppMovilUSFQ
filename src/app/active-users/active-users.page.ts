import { Component, OnInit } from '@angular/core';
import { ApiRestService } from '../api-rest.service';

@Component({
  selector: 'app-active-users',
  templateUrl: './active-users.page.html',
  styleUrls: ['./active-users.page.scss'],
})
export class ActiveUsersPage implements OnInit {

  isLoaded = false;
  data: any;

  constructor(private apiService: ApiRestService) { }

  ngOnInit() {
    this.getPosts();
  }

  getPosts(){
    this.apiService.getAllActive().then(data =>{
      this.data = data;
    })

    setTimeout(()=>{
      this.isLoaded = true;
    }, 300);
  }

}
