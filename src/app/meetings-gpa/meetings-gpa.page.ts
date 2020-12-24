import { Component, OnInit } from '@angular/core';
import { ApiRestService } from '../api-rest.service';

@Component({
  selector: 'app-meetings-gpa',
  templateUrl: './meetings-gpa.page.html',
  styleUrls: ['./meetings-gpa.page.scss'],
})
export class MeetingsGpaPage implements OnInit {

  isLoaded = false;
  data: any;
  GPA0= [];
  GPA1= [];
  GPA2= [];
  GPA3= [];
  GPA4= [];

  constructor(private apiService: ApiRestService) { }

  ngOnInit() {
    this.getPosts();
  }

  getPosts(){
    this.apiService.getAllStudents().then(data =>{
      this.data = data;
      for(let i = 0; i<this.data.length; i++){
        if(this.data[i].gpa < 1){
          this.GPA0.push(this.data[i]);
        }
        if(this.data[i].gpa > 1 && this.data[i].gpa < 2){
          this.GPA1.push(this.data[i]);
        }
        if(this.data[i].gpa > 2 && this.data[i].gpa < 3){
          this.GPA2.push(this.data[i]);
        }
        if(this.data[i].gpa > 3 && this.data[i].gpa < 4){
          this.GPA3.push(this.data[i]);
        }
        if(this.data[i].gpa == 4){
          this.GPA4.push(this.data[i]);
        }
      };
    })
    
    setTimeout(()=>{
      this.isLoaded = true;
    }, 2);
  }

}
