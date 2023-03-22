import { CommonService } from 'src/app/services/common.service';
import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { LinkDialogComponent } from './link-dialog.component';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css'],
})
export class EmployeeListComponent implements OnInit {
  displayedColumns: string[] = ['Id', 'Name', 'Description', 'Actions'];
  linkList: any;
  servicePath = 'important_links';
  constructor(
    private commonService: CommonService,
    private router: Router,
    public dialog: MatDialog,
    public matDialogRef: MatDialogRef<LinkDialogComponent>
  ) {}
  ngOnInit() {
    this.getLinkList();
  }

  getLinkList() {
    this.commonService.getAllUsers(this.servicePath).subscribe((response) => {
      this.linkList = response;
    });
  }

  addLink() {
    this.matDialogRef = this.dialog.open(LinkDialogComponent, {
      data: { isEdit: false, title: 'Add Link' },
    });
    this.matDialogRef.afterClosed().subscribe((result) => {
      this.createLink(JSON.parse(result));
    });
  }

  createLink(data: any) {
    this.commonService
      .createUser(this.servicePath, data)
      .subscribe((response) => {
        alert('Link added ' + response);
      });
  }

  editLink(id: any, data: any) {
    this.matDialogRef = this.dialog.open(LinkDialogComponent, {
      data: { isEdit: true, data, title: 'Edit Link' },
    });

    this.matDialogRef.afterClosed().subscribe((result) => {
      let data = JSON.parse(result);
      this.updateLink(data.id, data);
    });
  }

  updateLink(id: any, data: any) {
    this.commonService
      .updateUser(this.servicePath, id, data)
      .subscribe((response) => {
        alert('Link updated done ' + response);
      });
  }

  deleteLink(id: any) {
    this.matDialogRef = this.dialog.open(LinkDialogComponent, {
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
