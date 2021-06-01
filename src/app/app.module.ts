import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingComponent } from './landing/landing.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { InfoAPPComponent } from './info-app/info-app.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { OnlyOKComponent } from './only-ok/only-ok.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { QuiztestComponent } from './quiztest/quiztest.component';
import { PdfMakeComponent } from './pdf-make/pdf-make.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    HeaderComponent,
    FooterComponent,
    NavbarComponent,
    InfoAPPComponent,
    OnlyOKComponent,
    QuiztestComponent,
    PdfMakeComponent
  ],
  imports: [
    BrowserModule, HttpClientModule,ReactiveFormsModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
