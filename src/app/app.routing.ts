import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { HomeComponent } from './home/home.component';
import { PortalComponent } from 'app/portal/portal.component';
import { PortalDisplaypageComponent }from 'app/portal-displaypage/portal-displaypage.component';
import { OktaAuthGuard, OktaAuthService, OktaCallbackComponent } from '@okta/okta-angular';
import { Router, RouterModule, Routes } from '@angular/router';
import { Injector, NgModule } from '@angular/core';
import { LoginPageComponent } from './login-page/login-page.component';
import {IntegrationsComponent} from 'app/integrations/integrations.component'

const routes: Routes =[
    // { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: '',             component: LoginPageComponent },
    { path: 'home',             component: LoginPageComponent },
    //{ path: 'portal',           component: PortalDisplaypageComponent,canActivate: [OktaAuthGuard], data: { onAuthRequired }},
    { path: 'portal',           component: PortalDisplaypageComponent},
    { path: 'int',     component: IntegrationsComponent },
    //{ path: 'signup',           component: SignupComponent },
    //{ path: 'landing',          component: LandingComponent },
    // { path: 'nucleoicons',      component: NucleoiconsComponent }
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes,{
      useHash: false
    })
  ],
  exports: [RouterModule
  ],
})
export class AppRoutingModule { }
