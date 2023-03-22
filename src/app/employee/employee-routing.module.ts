import { EmployeeProfileComponent } from './employee-profile/employee-profile.component';
import { LinkDialogComponent } from './components/employee-list/link-dialog.component';
import { EmployeeDashboardComponent } from './components/employee-dashboard/employee-dashboard.component';
import { EmployeeListComponent } from './components/employee-list/employee-list.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: EmployeeDashboardComponent,
    children: [
      { path: 'emp-list', component: EmployeeListComponent },
      { path: 'emp-profile', component: EmployeeProfileComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EmployeeRoutingModule {}
