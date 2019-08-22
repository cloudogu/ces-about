import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { AboutComponent } from './about.component';
import { ImprintComponent } from './imprint.component';
import { PrivacyPolicyComponent } from './privacyPolicy.component';
import { TermsAndConditionsComponent } from './termsAndConditions.component';
import { LicensesComponent } from './licenses.component';

import { AppRoutingModule } from './app-routing.module';


@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    ImprintComponent,
    PrivacyPolicyComponent,
    TermsAndConditionsComponent,
    LicensesComponent
  ],
  imports: [
    NgbModule.forRoot(),
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

