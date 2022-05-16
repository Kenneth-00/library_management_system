import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardAdminComponent } from 'src/app/dashboard/dashboard-admin/dashboard-admin.component';
import { DashboardCustomerComponent } from 'src/app/dashboard/dashboard-customer/dashboard-customer.component';
import { ForgotPasswordComponent } from '../forgot-password/forgot-password.component';
import { NotFoundComponent } from '../not-found/not-found.component';
import { RegisterComponent } from '../register/register.component';
import { LoginComponent } from './login.component';
import { AuthguardGuard } from 'src/app/authguard.gurad';

const routes: Routes = [
  {path:'login', component:LoginComponent},
  {path:'dashboard-admin', component:DashboardAdminComponent, canActivate: [AuthguardGuard]},
  {path:'register', component:RegisterComponent},
  {path:'dashboard-customer', component:DashboardCustomerComponent, canActivate: [AuthguardGuard]},
  {path:'forgot-password', component:ForgotPasswordComponent},
  {path:'**', component:NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginRoutingModule { }