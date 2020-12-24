import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({providedIn: 'root'})
export class RouteStateService {
    private pathParamState = new BehaviorSubject<string>("null");
    private RoleState = new BehaviorSubject<any>(0);

    roleState: Observable<any>;
    pathParam: Observable<string>;

    constructor(){
        this.pathParam = this.pathParamState.asObservable();
        this.roleState = this.RoleState.asObservable();
    }

    updatePathParamState(newPathParam: string){
        this.pathParamState.next(newPathParam);
    }

    updateRoleState(newRoleState: number){
        this.RoleState.next(newRoleState);
    }
}