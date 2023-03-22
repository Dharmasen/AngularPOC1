import { CommonService } from 'src/app/services/common.service';
import { Component, OnInit } from '@angular/core';
import { UserDialogComponent } from '../user-dialog/user-dialog.component';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css'],
})
export class UsersListComponent implements OnInit {
  displayedColumns: string[] = ['Id', 'Name', 'Email', 'Actions'];
  usersList: any;
  receivedData: any;
  servicePath = 'users';
  constructor(
    private commonService: CommonService,
    public dialog: MatDialog,
    public matDialogRef: MatDialogRef<UserDialogComponent>
  ) {}
  ngOnInit() {
    this.getUserList();
  }

  getUserList() {
    this.commonService.getAllUsers(this.servicePath).subscribe((response) => {
      this.usersList = response;
    });
  }

  createDialog() {
    this.matDialogRef = this.dialog.open(UserDialogComponent, {
      data: { isEdit: false, title: 'Add User' },
    });
    this.matDialogRef.afterClosed().subscribe((result) => {
      this.createUser(JSON.parse(result));
    });
  }

  createUser(data: any) {
    this.commonService
      .createUser(this.servicePath, data)
      .subscribe((response) => {
        alert('User added ' + response);
      });
  }

  editDialog(id: any, data: any) {
    this.matDialogRef = this.dialog.open(UserDialogComponent, {
      data: { isEdit: true, data, title: 'Edit User' },
    });

    this.matDialogRef.afterClosed().subscribe((result) => {
      let data = JSON.parse(result);
      this.updateUser(data.id, data);
    });
  }

  updateUser(id: any, data: any) {
    this.commonService
      .updateUser(this.servicePath, id, data)
      .subscribe((response) => {
        alert('User updated done ' + response);
      });
  }

  deleteDialog(id: any) {
    this.matDialogRef = this.dialog.open(UserDialogComponent, {
      data: { isEdit: false, isDelete: true },
    });
    this.matDialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.commonService
          .removeUser(this.servicePath, id)
          .subscribe((response) => {
            alert('User successfully deleted ' + response);
          });
      }
    });
  }
}

//https://stackoverflow.com/questions/51815455/how-to-pass-data-from-angular-material-dialog-to-parent-component
