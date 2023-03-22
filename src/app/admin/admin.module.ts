import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MaterialModule } from './../material/material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { UsersListComponent } from './components/users-list/users-list.component';
import { UserDialogComponent } from './components/user-dialog/user-dialog.component';
import { AdminProfileComponent } from './components/admin-profile/admin-profile.component';
import { AdminListComponent } from './admin-list/admin-list.component';

@NgModule({
  declarations: [UsersListComponent, UserDialogComponent, AdminProfileComponent, AdminListComponent],
  imports: [CommonModule, AdminRoutingModule, MaterialModule, MatDialogModule],
  entryComponents: [UserDialogComponent],
  providers: [
    {
      provide: MatDialogRef,
      useValue: {},
    },
    UserDialogComponent,
  ],
})
export class AdminModule {}
