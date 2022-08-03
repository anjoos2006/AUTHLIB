import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  server_address: string = 'http://localhost:3000';
  constructor(private http:HttpClient) { }

  newUsers(nuser: any) {
    console.log("nuser")
    console.log(nuser)
    return this.http.post<any>(`${this.server_address}/users/signup`,nuser)
      // .subscribe(data => { console.log(data) })
  };

  // httpOptions = {
  //   headers: new HttpHeaders({
  //     'Content-Type':  'application/json',
  //     "Access-Control-Allow-Origin": "*",
      
  //   } ),responseType: 'text' as 'json'
  // };

  userLogin(user:any){
    console.log("user in service",user)
    return this.http.post<any>(`${this.server_address}/users/login`,{"User": user})
    // .subscribe((data)=>{
    //   console.log('success')
    //   console.log(data)
    // })
  }
  loggedIn(){
    return !!localStorage.getItem('token')
  }
  getToken(){
    return localStorage.getItem('token');
  }
}

