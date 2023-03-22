import { MatDialogRef } from '@angular/material/dialog';
import { LinkDialogComponent } from './components/employee-list/link-dialog.component';
import { MaterialModule } from './../material/material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeeRoutingModule } from './employee-routing.module';
import { EmployeeListComponent } from './components/employee-list/employee-list.component';
import { EmployeeDashboardComponent } from './components/employee-dashboard/employee-dashboard.component';
import { FormsModule } from '@angular/forms';
import { EmployeeProfileComponent } from './employee-profile/employee-profile.component';

@NgModule({
  declarations: [
    EmployeeListComponent,
    EmployeeDashboardComponent,
    LinkDialogComponent,
    EmployeeProfileComponent,
  ],
  imports: [CommonModule, EmployeeRoutingModule, FormsModule, MaterialModule],
  providers: [
    {
      provide: MatDialogRef,
      useValue: {},
    },
    LinkDialogComponent,
  ],
  entryComponents: [LinkDialogComponent],
})
export class EmployeeModule {}
