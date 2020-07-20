import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SocialLoginModule, SocialAuthServiceConfig } from 'angularx-social-login';
import {
  GoogleLoginProvider,
  FacebookLoginProvider,
  AmazonLoginProvider,
} from 'angularx-social-login';
import { AuthServiceConfig, LoginProviderClass } from 'ng4-social-login';

/* const config   = new AuthServiceConfig([
  {id:GoogleLoginProvider.PROVIDER_ID,
  provider:new GoogleLoginProvider("387893520530-o93h47b0f4r36ajnb3316uqpevjn0860.apps.googleusercontent.com")
  }
],false); */

 
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SocialLoginModule
    
  ],
  providers: [
    {
      provide: 'SocialAuthServiceConfig',
      useValue: {
        autoLogin: false,
        providers: [
          {
            id: GoogleLoginProvider.PROVIDER_ID,
            provider: new GoogleLoginProvider(
              '957804172312-21akjharehnvleu2h2m3p0re379sqfqb.apps.googleusercontent.com'
            ),
          },
          
        ],
      } as SocialAuthServiceConfig,
    }
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
