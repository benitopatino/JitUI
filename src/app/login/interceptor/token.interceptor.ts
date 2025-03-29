// token.interceptor.ts
import { HttpInterceptorFn } from '@angular/common/http';
import { LoginService } from '../login-service/login.service';

export const tokenInterceptorFn: HttpInterceptorFn = (req, next) => {
  const token = localStorage.getItem(LoginService.JitTokenSessionName); // or localStorage

  const isAuthRoute = req.url.includes('/auth/login') || req.url.includes('/auth/register');

  if (token && !isAuthRoute) {
    const cloned = req.clone({
      setHeaders: {
        Authorization: `Bearer ${token}`,
      },
    });

    return next(cloned);
  }

  return next(req);
};

