import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { APIResponseModel, Application } from '../model/application.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MasterService {

  constructor(private http: HttpClient) { }

  addNewApplication(obj: Application): Observable<APIResponseModel> {
    debugger;
    return this.http.post<APIResponseModel>("https://projectapi.gerasim.in/api/Loan/AddNewApplication",obj);
  }

}
