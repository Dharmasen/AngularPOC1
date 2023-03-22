import { Component, Inject, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { CommonService } from 'src/app/services/common.service';

@Component({
  selector: 'app-link-dialog',
  templateUrl: './link-dialog.component.html',
  styles: ['mat-form-field {   width: 100%;}'],
})
export class LinkDialogComponent implements OnInit {
  model: any = {
    name: '',
    description: '',
    link: '',
  };
  parentData: any;
  isDelete = false;
  deleteMessage = 'Are you sure want to delete?';
  title = '';
  constructor(
    private commonService: CommonService,
    private router: Router,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private dialogRef: MatDialogRef<LinkDialogComponent>
  ) {}
  ngOnInit(): void {
    this.isDelete = this.data.isDelete;
    this.title = this.data.title;
    if (this.data.isEdit) this.model = this.data.data;
  }

  onSubmit() {
    this.dialogRef.close(`${JSON.stringify(this.model)}`);
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
