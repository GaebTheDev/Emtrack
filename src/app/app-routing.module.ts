import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { authGuard } from './guards/auth.guard';
import { HomeComponent } from './components/dashboard/home/home.component';
import { EmployeesComponent } from './components/dashboard/employees/employees.component';
import { CompanyComponent } from './components/dashboard/company/company.component';

const routes: Routes = [
  {
    path: "login",
    component: LoginComponent
  },
  {
    path: "register",
    component: RegisterComponent
  },
  {
    path: "dashboard",
    component: DashboardComponent,
    canActivate: [authGuard],
    children: [
      {
        path: "",
        redirectTo: "home",
        pathMatch: 'full'
      },
      {
        path: "home", component: HomeComponent,
      },
      {
        path: "employees", component: EmployeesComponent,
      },
      {
        path: "company", component: CompanyComponent,
      },
    ]
  },
  {
    path: "",
    redirectTo: "login",
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
