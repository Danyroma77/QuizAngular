import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InfoAPPComponent } from './info-app/info-app.component';
import { IsOKV2Component } from './is-okv2/is-okv2.component';
import { LandingComponent } from './landing/landing.component';
import { QuiztestComponent } from './quiztest/quiztest.component';

const routes: Routes = [
  {path:'', component: LandingComponent},
  {path:'quiz', component: QuiztestComponent},
  {path:'quiz/:idQuiz', component: QuiztestComponent},
  {path:'isOkOnly', component: IsOKV2Component},
  {path:'isOkOnly/:idQuiz', component: IsOKV2Component},
  {path:'info', component: InfoAPPComponent}
  /*
  {path:'pdf', component:PdfMakeComponent},
  {path:'pdf/:idQuiz', component:PdfMakeComponent}*/
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
