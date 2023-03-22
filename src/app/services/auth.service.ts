import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { CommonService } from './common.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  userDetails: any;
  isAuthenticate: boolean = false;
  servicePath = 'users';

  constructor(private commonService: CommonService) {}

  users = this.commonService
    .getAllUsers(this.servicePath)
    .subscribe((response) => {
      this.userDetails = response;
    });
  validateUser(email: string, password: string): Observable<boolean> {
    const loginUser = this.userDetails.find(
      (data: { email: string; password: string }) =>
        data.email === email && data.password === password
    );
    if (loginUser) {
      this.isAuthenticate = true;
      localStorage.setItem('login_info', JSON.stringify(loginUser));
      return of(true);
    }
    return of(false);
  }
}
