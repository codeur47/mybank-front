import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{ path: 'signin', loadChildren: () => import('./features/signin/signin.module').then(m => m.SigninModule) }, { path: 'signup', loadChildren: () => import('./features/signup/signup.module').then(m => m.SignupModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
