import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { AboutComponent } from './about.component';
import { ImprintComponent } from './imprint.component';
import { PrivacyPolicyComponent } from './privacyPolicy.component';
import { TermsAndConditionsComponent } from './termsAndConditions.component';
import { LicensesComponent } from './licenses.component';

const routes: Routes = [
  { path: '', redirectTo: '/about', pathMatch: 'full' },
  { path: 'about',  component: AboutComponent },
  { path: 'imprint', component: ImprintComponent },
  { path: 'privacyPolicy',     component: PrivacyPolicyComponent },
  { path: 'termsAndConditions', component: TermsAndConditionsComponent},
  { path: 'licenses', component: LicensesComponent}
];

@NgModule({
  imports: [ RouterModule.forRoot(routes), NgbModule], // forRoot(routes, {useHash: true})
  exports: [ RouterModule ]
})
export class AppRoutingModule {}


/*
Copyright 2017 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
