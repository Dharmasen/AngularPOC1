import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CommonService {
  apiServerURL = 'http://localhost:3000/';

  constructor(private http: HttpClient) {}

  createUser(path: any, data: any) {
    return this.http.post(this.apiServerURL + path, data);
  }

  updateUser(path: any, id: any, data: any) {
    return this.http.put(this.apiServerURL + path + '/' + id, data);
  }

  removeUser(path: any, id: any) {
    return this.http.delete(this.apiServerURL + path + '/' + id);
  }

  getAllUsers(path: any) {
    return this.http.get(this.apiServerURL + path);
  }

  getSingleUser(path: any, id: string) {
    return this.http.get(this.apiServerURL + path + '/' + id);
  }
}
