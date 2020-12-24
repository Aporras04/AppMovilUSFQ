import { Component, OnInit } from '@angular/core';
import { ApiRestService } from '../api-rest.service';

@Component({
  selector: 'app-condition-student',
  templateUrl: './condition-student.page.html',
  styleUrls: ['./condition-student.page.scss'],
})
export class ConditionStudentPage implements OnInit {

  isLoaded = false;
  data: any;
  condicionados = [];

  constructor(private apiService: ApiRestService) { }

  ngOnInit() {
    this.getPosts();
  }

  getPosts(){
    this.apiService.getAllStudents().then(data =>{
      this.data = data;
      for(let i = 0; i<this.data.length; i++){
        if(this.data[i].gpa < 2.5){
          this.condicionados.push(this.data[i]);
        }
      }
    })

    setTimeout(()=>{
      this.isLoaded = true;
    }, 1);
  }

}
