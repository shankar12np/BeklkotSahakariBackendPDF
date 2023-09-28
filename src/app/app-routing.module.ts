import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CheckingAccountComponent} from "./checking-account/checking-account.component";
import {WelcomeComponent} from "./welcome/welcome.component";

const routes: Routes = [
  {path: 'checking-account', component: CheckingAccountComponent},
  {path: '', component: WelcomeComponent, pathMatch: 'full'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
