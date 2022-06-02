import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardAdminComponent } from 'src/app/dashboard/dashboard-admin/dashboard-admin.component';
import { DashboardCustomerComponent } from 'src/app/dashboard/dashboard-customer/dashboard-customer.component';
import { ForgotPasswordComponent } from '../forgot-password/forgot-password.component';
import { NotFoundComponent } from '../not-found/not-found.component';
import { RegisterComponent } from '../register/register.component';
import { AuthguardGuard } from 'src/app/authguard.guard';
import { InStackComponent } from '../in-stack/in-stack.component';
import { AddBookComponent } from '../add-book/add-book.component';
import { PendingBooksComponent } from '../pending-books/pending-books.component';
import { EditBookComponent } from '../edit-book/edit-book.component';
import { ListUsersComponent } from '../list-users/list-users.component';
import { BorrowBooksComponent } from '../borrow-books/borrow-books.component';

const routes: Routes = [
  {
    path:'dashboard-admin', 
    component:DashboardAdminComponent, 
    canActivate: [AuthguardGuard],
    children:[
      {
        path:'',
        canActivateChild: [AuthguardGuard],
        children: [
          {
            path:'add-book',
            component:AddBookComponent
          },
          {
            path:'in-stack', 
            component:InStackComponent
          },
          {
            path:'edit-book-details/:id',
            component:EditBookComponent
          },
          {
            path:'list-of-users',
            component:ListUsersComponent
          },
          {
            path:'pending-books',
            component:PendingBooksComponent
          },
          {
            path:'register', 
            component:RegisterComponent
          }
        ]
      },
    ]
  },
  
  {
    path:'dashboard-customer', 
    component:DashboardCustomerComponent, 
    canActivate: [AuthguardGuard],
    children:[
      {
        path:'',
        canActivateChild: [AuthguardGuard],
        children: [
          {
            path:'borrow-books',
            component:BorrowBooksComponent
          },
        ]
      }
    ]
  },
  {
    path:'forgot-password', 
    component:ForgotPasswordComponent
  },
  {
    path:'**', 
    component:NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginRoutingModule { }