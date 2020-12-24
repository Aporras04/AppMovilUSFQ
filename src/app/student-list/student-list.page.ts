import { Component, OnInit } from '@angular/core';
import { ApiRestService } from '../api-rest.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.page.html',
  styleUrls: ['./student-list.page.scss'],
})
export class StudentListPage implements OnInit {

  resultado:any;
  isLoaded=false;
  userID = null;
  constructor(public apiService: ApiRestService, private activatedRoute: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.userID = this.activatedRoute.snapshot.paramMap.get("id");
    this.getPosts();
  }


  getPosts(){
    this.apiService.getStudent(this.userID).then(data=>{
      this.resultado=data;
      console.log(this.resultado)
      //this.routeState.updateRoleState(this.resultado.RolId)
    });
    setTimeout(()=>{
      this.isLoaded = true;
    }, 500);
  }

  goToStudent(id){
    this.router.navigateByUrl("student-profile/" + this.userID + "/"+ id);
  }

}
