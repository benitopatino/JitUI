import { ApplicationConfig, importProvidersFrom, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { HTTP_INTERCEPTORS, provideHttpClient, withInterceptors } from '@angular/common/http';
import { tokenInterceptorFn } from './login/interceptor/token.interceptor';
import { JwtModule } from '@auth0/angular-jwt';
import { LoginService } from './login/login-service/login.service';

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes),
  provideHttpClient(withInterceptors([tokenInterceptorFn])), importProvidersFrom(
            JwtModule.forRoot({
                config: {
                    allowedDomains: ["example.com"],
                    disallowedRoutes: ["http://example.com/examplebadroute/"],
                },
            }),
        ),
]};
