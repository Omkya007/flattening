import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Iuser } from '../modules/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  BASE_URL=environment.BASE_URL
  constructor(
    private _http:HttpClient
  ) { }

  //get USerID

  getUser(id:number):Observable<any>{
    return this._http.get(`${this.BASE_URL}/users/${id}`)
  }


  //getpostbyUSerID

  getPost(id:number):Observable<any>{
    return this._http.get(`${this.BASE_URL}/users/${id}/posts`)
  }

  getAllUsers():Observable<Iuser[]>{
    return this._http.get<Iuser[]>(`${this.BASE_URL}/users`)
  }
}
