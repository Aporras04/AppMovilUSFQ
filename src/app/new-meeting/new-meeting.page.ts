import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiRestService } from '../api-rest.service';

@Component({
  selector: 'app-new-meeting',
  templateUrl: './new-meeting.page.html',
  styleUrls: ['./new-meeting.page.scss'],
})
export class NewMeetingPage implements OnInit {

  userID = null;
  isLoaded = false;
  students: any;
  estudiante: any;
  tema: any;
  descripcion: any;
  fecha: any;
  mailProf: any;

  constructor(private activatedRoute: ActivatedRoute, public apiService: ApiRestService) { }

  ngOnInit() {
    this.userID = this.activatedRoute.snapshot.paramMap.get("id");
    this.getStudents();
  }

  getStudents(){
    this.apiService.getStudent(this.userID).then(data=>{
      this.students = data;
    });
    this.apiService.getUserById(this.userID).then(data =>{
      let prof: any;
      prof = data;
      this.mailProf = prof.correo_institucional;
    });
    setTimeout(()=>{
      this.isLoaded = true;
    }, 500);
  }

  crearReunion(){
    this.apiService.createMeeting(this.tema, this.descripcion, this.fecha, this.userID, this.estudiante, this.mailProf);
    this.tema = null;
    this.descripcion = null;
    this.fecha = null;
    this.estudiante = null;
  }
}
