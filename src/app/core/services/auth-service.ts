import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private readonly TOKEN_KEY = 'token';

  private readonly DEMO_TOKEN = 'demo-token-123456';


  constructor() { }


  login(username: string, password: string): Observable<any> {


    // ==========================
    // DEMO LOGIN
    // API AANE PAR YAHAN HTTP POST LAGANA HAI
    // ==========================

    if (username === 'admin' && password === 'admin123') {


      const response = {

        success: true,

        token: this.DEMO_TOKEN,

        user: {
          id: 1,
          name: 'Admin'
        }

      };


      return of(response).pipe(

        delay(500),

        tap((res)=>{

          this.setToken(res.token);

        })

      );


    }


    return of({

      success:false,

      message:'Invalid Username or Password'

    }).pipe(

      delay(500)

    );

  }



  setToken(token:string):void{

    sessionStorage.setItem(
      this.TOKEN_KEY,
      token
    );

  }



  getToken():string|null{

    return sessionStorage.getItem(
      this.TOKEN_KEY
    );

  }



  isLoggedIn():boolean{

    return !!this.getToken();

  }



  logout():void{

    sessionStorage.removeItem(
      this.TOKEN_KEY
    );

  }



  clearSession():void{

    sessionStorage.clear();

  }

}