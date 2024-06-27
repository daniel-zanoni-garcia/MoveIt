import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class SignupService {
  constructor(private httpClient: HttpClient) { }
 
  signup(name: string, email: string, password: string, passwordConfirm: string) {
    return this.httpClient.post("/signup", {name, email, password, passwordConfirm}).pipe(
      tap((value) => {
        return console.log(value);
      })
    )
  }
}
