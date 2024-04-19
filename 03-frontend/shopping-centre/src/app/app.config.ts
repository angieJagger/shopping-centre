import { ApplicationConfig , Injector, importProvidersFrom } from '@angular/core';
import { Router, provideRouter } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';
import { OktaAuth } from '@okta/okta-auth-js';
import { OktaAuthModule } from '@okta/okta-angular';


import { routes } from './app.routes';
import myAppConfig from './config/my-app-config';
import { ProductService } from './services/product.service';

const oktaConfig = myAppConfig.oidc;
const oktaAuth = new OktaAuth(oktaConfig);

export function sendToLoginPage(oktaAuth: OktaAuth, injector: Injector) {
  // Use injector to access any service available within your application
  const router = injector.get(Router);

  // Redirect the user to your custom login page
  router.navigate(['/login']);
}

export const appConfig: ApplicationConfig = {

  providers: [provideRouter(routes),
    // importProvidersFrom(HttpClientModule), {provide: OKTA_CONFIG, useValue: { oktaAuth }}, ]
    provideHttpClient(),
    importProvidersFrom(OktaAuthModule.forRoot({ oktaAuth})),
  ProductService]
};
