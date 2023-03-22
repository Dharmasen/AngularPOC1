import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignupComponent } from './components/signup/signup.component';
import { AuthGuard } from './services/auth.guard';
import { DashboardComponent } from './components/dashboard/dashboard.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  {
    path: 'home',
    component: HomeComponent,
    canActivate: [AuthGuard],
  },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  {
    path: 'dashboard',
    component: DashboardComponent,
    // loadChildren: () =>
    //   import(`./employee/employee.module`).then((m) => m.EmployeeModule),
    children: [
      {
        path: 'admin',
        loadChildren: () =>
          import(`./admin/admin.module`).then((m) => m.AdminModule),
      },
      {
        path: 'employee',
        loadChildren: () =>
          import(`./employee/employee.module`).then((m) => m.EmployeeModule),
      },
    ],
  },
  // {
  //   path: 'admin',
  //   loadChildren: () =>
  //     import(`./admin/admin.module`).then((m) => m.AdminModule),
  // },
  // {
  //   path: 'employee',
  //   loadChildren: () =>
  //     import(`./employee/employee.module`).then((m) => m.EmployeeModule),
  // },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
