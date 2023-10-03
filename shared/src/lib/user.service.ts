import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class UserService {

  private isUserLoggedIn = new BehaviorSubject(false);
  
  checkCredentials(username: string, password: string) {
    if (username === '' && password === '') {
      this.isUserLoggedIn.next(true);
    }
  }

  get isUserLoggedIn$() {
    return this.isUserLoggedIn.value
  }

  logout() {
    this.isUserLoggedIn.next(false);
  }
}