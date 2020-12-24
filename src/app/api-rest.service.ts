import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiRestService {

  url='http://localhost:3000'

  constructor(public http: HttpClient) { }

  getUserByEmail(email){
    return new Promise(resolve =>{
      this.http.get(this.url + "/user-by-email/" + email).subscribe(data =>{
        resolve(data);
      }, error =>{
        console.log(error);
      })
    })
  }

  checkLogIn(email, password){
    return new Promise(resolve => {
      this.http.get(this.url + "/login/" + email + "/" + password).subscribe(data=>{
        resolve(data);
      }, error =>{
        console.log(error);
      })
    })
  }

  getStudent(id){
    return new Promise(resolve=>{
      this.http.get(this.url+'/students/' + id).subscribe(data=>{
        resolve(data);
      },error=>{
        console.log(error);
      });
    });
  }

  getAllStudents(){
    return new Promise(resolve =>{
      this.http.get(this.url + "/estudiantes").subscribe(data =>{
        resolve(data);
      }, error =>{
        console.log(error);
      })
    })
  }

  getOneStudent(){
    return new Promise(resolve=>{
      this.http.get(this.url+'/student').subscribe(data=>{
        resolve(data);
      }, error=>{
        console.log(error);
      });
    });
  }

  getProfesor(id){
    return new Promise(resolve=>{
      this.http.get(this.url+'/profesor-by-id/' + id).subscribe(data=>{
        resolve(data);
      }, error=>{
        console.log(error);
      });
    });
  }

  getUserById(id){
    return new Promise(resolve=>{
      this.http.get(this.url+'/user-by-id/' + id).subscribe(data=>{
        resolve(data);
      }, error=>{
        console.log(error);
      });
    });
  }

  getEstudianteViewById(id){
    return new Promise(resolve =>{
      this.http.get(this.url + '/student/' + id).subscribe(data =>{
        resolve(data);
      }, error =>{
        console.log(error);
      });
    });
  }

  getMeetingsById(id){
    return new Promise(resolve =>{
      this.http.get(this.url + '/reuniones/' + id).subscribe(data =>{
        resolve(data);
      }, error =>{
        console.log(error);
      });
    });
  }

  getMeetingInfo(id){
    return new Promise(resolve =>{
      this.http.get(this.url + '/reunion-by-id/' + id).subscribe(data =>{
        resolve(data);
      }, error =>{
        console.log(error);
      });
    });
  }

  getStudentInfo(id){
    return new Promise(resolve =>{
      this.http.get(this.url + '/estudiante/'+ id).subscribe(data =>{
        resolve(data);
      }, error=>{
        console.log(error);
      }
      );
    })
  }

  createMeeting(tema, descripcion, fecha, id, studId, mail){
    return new Promise(resolve =>{
      this.http.post(this.url + "/create/" + tema + "/" + descripcion + "/" + fecha + "/" + id +"/" + studId + "/" + mail, null).subscribe(
        data =>{
          resolve(data);
        }, error =>{
          console.log(error);
        }
      )
    })
  }

  getNewMeetings(id){
    return new Promise(resolve =>{
      this.http.get(this.url + '/reuniones-nuevas/'+ id).subscribe(data =>{
        resolve(data);
      }, error=>{
        console.log(error);
      }
      );
    })
  }


  getRejectMeetings(id){
    return new Promise(resolve =>{
      this.http.get(this.url + '/reuniones-rechazadas/'+ id).subscribe(data =>{
        resolve(data);
      }, error=>{
        console.log(error);
      }
      );
    })
  }

  updateMeetingStatus(accepted, id, email){
    return new Promise(resolve =>{
      if(accepted){
        this.http.post(this.url + "/accept/" + id +"/" + email, null).subscribe(data =>{
          resolve(data);
        }, error =>{
          console.log(error);
        })
      }else{
        this.http.post(this.url + "/reject/" + id + "/" + email, null).subscribe(data =>{
          resolve(data);
        }, error =>{
          console.log(error);
        })
      }
    })
  }

  updateMeetingComments(user, id, comment, email){
    return new Promise(resolve =>{
      if(user === 2){
        this.http.post(this.url + "/update-comments-prof/" + id + "/" + comment + "/" + email,null).subscribe(data =>{
          resolve(data);
        }, error =>{
          console.log(error);
        })
      }else if(user === 3){
        this.http.post(this.url + "/update-comments-estud/" + id + "/" + comment + "/" + email,null).subscribe(data =>{
          resolve(data);
        }, error =>{
          console.log(error);
        })
      }
    })
  }

  sendEmail(email){
    return new Promise(resolve =>{
      this.http.post(this.url + "/sendmail/" + email, null).subscribe(data =>{
        resolve(data);
      }, error =>{
        console.log(error);
      })
    })
  }

  setPassword(id, password){
    return new Promise(resolve =>{
      this.http.post(this.url + "/change-password/" + id + "/" + password, null).subscribe(data =>{
        resolve(data);
      }, error =>{
        console.log(error);
      })
    })
  }

  getAllAccepted(){
    return new Promise(resolve =>{
      this.http.get(this.url + "/reuniones-aceptadas").subscribe(data =>{
        resolve(data);
      }, error =>{
        console.log(error);
      })
    })
  }

  getAllRejected(){
    return new Promise(resolve =>{
      this.http.get(this.url + "/reuniones-rechazadas").subscribe(data =>{
        resolve(data);
      }, error =>{
        console.log(error);
      })
    })
  }

  getAllActive(){
    return new Promise(resolve =>{
      this.http.get(this.url + "/estudiantes-activos").subscribe(data =>{
        resolve(data);
      }, error =>{
        console.log(error);
      })
    })
  }
}

