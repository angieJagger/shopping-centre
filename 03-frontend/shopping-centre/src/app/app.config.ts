import { ApplicationConfig , Injector, importProvidersFrom } from '@angular/core';
import { Router, provideRouter } from '@angular/router';
import { HTTP_INTERCEPTORS, HttpClientModule, provideHttpClient } from '@angular/common/http';
import { OktaAuth } from '@okta/okta-auth-js';
import { OKTA_CONFIG, OktaAuthModule } from '@okta/okta-angular';


import { routes } from './app.routes';
import myAppConfig from './config/my-app-config';
import { ProductService } from './services/product.service';
import { AuthInterceptorService } from './services/auth-interceptor.service';

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
    importProvidersFrom(HttpClientModule),
    provideHttpClient(),
    {provide: OKTA_CONFIG, useValue: oktaConfig},
    {provide: HTTP_INTERCEPTORS, useClass: AuthInterceptorService, multi: true},
    importProvidersFrom(OktaAuthModule.forRoot({ oktaAuth})),
  ProductService]
};
