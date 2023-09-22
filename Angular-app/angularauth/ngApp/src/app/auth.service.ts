import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Router } from '@angular/router'

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private _registerUrl = "http://localhost:3000/api/register";
  private _loginUrl = "http://localhost:3000/api/login";

  constructor(private http:HttpClient, private _router:Router) { }

  registerUser(user:any){
    console.log("Service Called ")
    return this.http.post<any>(this._registerUrl, user);
  }
  loginUser(user:any){
    return this.http.post<any>(this._loginUrl, user);
  }

  loggedIn(){
    return !!localStorage.getItem('token')
  }
  getToken(){
    return localStorage.getItem('token')
  }
  logoutUser(){
    localStorage.removeItem('token')
    this._router.navigate(['/events'])
  }
}

// will token remain in local storage forever if users not logout?
// The token will remain in local storage forever if users do not logout in typescript. 
// This is because local storage is a persistent storage mechanism that stores data on the client side. 
// This means that the data is stored on the user's computer and is not deleted when the user closes the browser.

// As long as the user does not manually delete the token from local storage, it will remain there indefinitely. 
// This can be a security risk, as it means that if a user's computer is compromised, the token could be stolen and used to access the user's account.

// To mitigate this risk, it is important to ensure that users are aware of the risks of storing tokens in local storage and to provide them with a way to easily delete the tokens when they are no longer needed.c