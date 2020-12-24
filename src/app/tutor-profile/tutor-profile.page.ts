import { analyzeAndValidateNgModules } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {ApiRestService} from '../api-rest.service'

@Component({
  selector: 'app-tutor-profile',
  templateUrl: './tutor-profile.page.html',
  styleUrls: ['./tutor-profile.page.scss'],
})
export class TutorProfilePage implements OnInit {

  result:any;
  data: any;
  userID = null;
  isLoaded = false;

  constructor(public apiservice:ApiRestService, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.userID = this.activatedRoute.snapshot.paramMap.get("id");
    this.getProfesorById();
  }

  getProfesorById(){
    this.apiservice.getEstudianteViewById(this.userID).then(data =>{
      this.data = data;
      this.apiservice.getProfesor(this.data.estudiante.profesorId).then(data=>{
        this.result= data;
        console.log(data);
      });
    });
    setTimeout(()=>{
      this.isLoaded = true;
    }, 500);
  }

}
