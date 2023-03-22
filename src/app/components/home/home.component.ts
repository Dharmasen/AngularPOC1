import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/services/common.service';
//import{} 'src/app/services/user-details.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  // users!: Observable<UserModel[]>;
  userObject!: any;
  userDetails!: [];
  servicePath = 'users';
  constructor(
    // private userService: UserDetailsService,
    private commonService: CommonService
  ) {}

  ngOnInit() {
    this.getUsers();
  }

  getUsers() {
    // this.users = this.userService.getUsers();
    this.commonService.getAllUsers(this.servicePath).subscribe((response) => {
      this.userObject = response;
      console.log('All details fetched done ' + this.userObject);
    });
  }
  deleteUser(id: any) {
    alert('Delete confirm ' + id);
    this.commonService.removeUser(this.servicePath, id).subscribe(() => {
      this.getUsers();
    });
  }
}
