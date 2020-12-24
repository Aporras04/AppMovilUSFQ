import { Component, OnInit } from '@angular/core';
import { ApiRestService } from '../api-rest.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-student-profile',
  templateUrl: './student-profile.page.html',
  styleUrls: ['./student-profile.page.scss'],
})
export class StudentProfilePage implements OnInit {

  result:any;
  studentId = null;
  isLoaded=false;
  userID = null;
  constructor(public apiService: ApiRestService, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.userID = this.activatedRoute.snapshot.paramMap.get("id");
    this.studentId = this.activatedRoute.snapshot.paramMap.get('studId')
    this.getStudent()
  }

  getStudent(){
    this.apiService.getStudentInfo(this.studentId).then(data=>{
      this.result=data;
      console.log(this.result);
    })
    setTimeout(()=>{
      this.isLoaded = true;
    }, 500)
  }
}
