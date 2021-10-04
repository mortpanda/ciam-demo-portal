import { Component, OnInit } from '@angular/core';
import { ViewEncapsulation } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { OktaSDKAuthService } from 'app/shared/okta/okta-auth-service';
import {
  OktaAuth,
  OktaAuthOptions,
  TokenManager,
  AccessToken,
  IDToken,
  UserClaims,
  TokenParams
} from '@okta/okta-auth-js'

@Component({
  selector: 'app-portal',
  templateUrl: './portal.component.html',
  styleUrls: ['./portal.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class PortalComponent implements OnInit {
  UserLoggedIn: any;
  strWelcome: any;
  authService = new OktaAuth(this.oktaSDKAuth.config);
  strUserSession: Boolean;
  durationInSeconds = 7;

  constructor(private _snackBar: MatSnackBar, private oktaSDKAuth: OktaSDKAuthService) { }

  async ngOnInit() {
    this.strUserSession = await this.authService.session.exists()
      .then(function (exists) {
        if (exists) {
          // logged in
          console.log(exists);
          return exists
        } else {
          // not logged in
          //console.log(exists);
          return exists
        }
      });

    switch (this.strUserSession == true) {
      case false:
        //alert(this.oktaSDKAuth.config.redirectUri)
        // this.openSnackBar()

      case true:
        var strSession = this.authService.token.getWithPopup({
          responseType: 'id_token', // or array of types
          sessionToken: 'testSessionToken', // optional if the user has an existing Okta session           
        })
          .then(function (res) {
            var tokens = res.tokens;
            //console.log(res.tokens);
            //console.log(res.state);
            var strUser = tokens.idToken.claims.email;
            //console.log(strUser);
            return tokens.idToken.claims.email;
          }
          )

        const strUserGet = async () => {
          const strUseremail = await strSession;
          //console.log(strUseremail)
          this.UserLoggedIn = strUseremail;
          this.strWelcome = "ようこそ"

        }
        if (location.pathname == "/profile") {
          //If not in the profile page, don't get the current user
        }
        else {
          strUserGet();
        }
    }
  }

  

}


