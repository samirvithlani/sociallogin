import { Component } from '@angular/core';
import { SocialUser } from 'ng4-social-login';
import { FacebookLoginProvider, GoogleLoginProvider } from "angularx-social-login";
import { SocialAuthService } from "angularx-social-login";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private authService: SocialAuthService) { }

  title = 'signindemo';
  public user: any = SocialUser;
  loggedIn: boolean;
  googleLogin() {

    this.authService.authState.subscribe((user) => {
      this.user = user;
      console.log(user)
      this.loggedIn = (user != null);
    });

  }
}
