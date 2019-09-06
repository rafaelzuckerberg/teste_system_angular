import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../../interfaces/user';
import { environment } from 'src/environments/environment'; 
// import decode from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  api: 'login';

  constructor(private http: HttpClient) { }

  authentication(user: User) {
    return new Promise((resolve, reject) => {
      this.http.post<User>(environment.api + 'login', user)
        .toPromise()
          .then(res => { 
            localStorage.setItem('token', res['token']);
            resolve(res);
          }, err => {
            reject(err)
          });
    });
  }


  getToken(): string {
    return localStorage.getItem('token');
  }

  // public isAuthenticated(): boolean {
  //   const token = this.getToken();
  //   return tokenNotExpired(null, token);
  // }


  logout() {
    return this.http.get(environment + 'logout');
  }

}
