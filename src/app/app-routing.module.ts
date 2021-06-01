import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './landing/landing.component';
import { OnlyOKComponent } from './only-ok/only-ok.component';
import { PdfMakeComponent } from './pdf-make/pdf-make.component';
import { QuiztestComponent } from './quiztest/quiztest.component';

const routes: Routes = [
  {path:'', component: LandingComponent},
  {path:'quiz', component: QuiztestComponent},
  {path:'quiz/:idQuiz', component: QuiztestComponent},
  {path:'isOkOnly', component: OnlyOKComponent},
  {path:'pdf', component:PdfMakeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
