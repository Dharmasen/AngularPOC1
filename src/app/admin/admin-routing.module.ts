import { AdminListComponent } from './admin-list/admin-list.component';
import { AdminProfileComponent } from './components/admin-profile/admin-profile.component';
import { UsersListComponent } from './components/users-list/users-list.component';
import { UserDialogComponent } from './components/user-dialog/user-dialog.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: UsersListComponent,
    children: [
      { path: 'profile', component: AdminProfileComponent },
      { path: 'admin-list', component: AdminListComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}
