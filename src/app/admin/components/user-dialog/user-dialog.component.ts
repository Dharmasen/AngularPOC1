import { Component, Inject, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { CommonService } from 'src/app/services/common.service';

@Component({
  selector: 'app-user-dialog',
  templateUrl: './user-dialog.component.html',
  styleUrls: ['./user-dialog.component.css'],
})
export class UserDialogComponent implements OnInit {
  signupModel: any = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  };
  parentData: any;
  isDelete = false;
  deleteMessage = 'Are you sure want to delete?';
  title = '';
  constructor(
    private commonService: CommonService,
    private router: Router,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private dialogRef: MatDialogRef<UserDialogComponent>
  ) {}
  ngOnInit(): void {
    this.isDelete = this.data.isDelete;
    this.title = this.data.title;
    if (this.data.isEdit) this.signupModel = this.data.data;
  }

  onSubmit() {
    this.dialogRef.close(`${JSON.stringify(this.signupModel)}`);
  }

  onConfirmClick() {
    this.dialogRef.close(true);
  }

  onReset(form: NgForm): void {
    form.reset();
  }

  onClose(): void {
    this.dialogRef.close();
  }
}
