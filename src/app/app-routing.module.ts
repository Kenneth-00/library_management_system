import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';

const routes: Routes = [
  {path:'login', component:LoginComponent},
  {path:'login', loadChildren: () => import('./components/login/login.module').then(m => m.LoginModule)},
  {path:'', redirectTo:'login', pathMatch:'full'}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
