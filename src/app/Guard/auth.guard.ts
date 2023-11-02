import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { LoginService } from '../service/login.service';

export const authGuard: CanActivateFn = (route, state) => {

  const currentmenu = route.url[0].path;
  const router =  inject(Router);
  const service = inject(LoginService);

    if(service.haveaccess()){
      return true
    // if( currentmenu == 'home' ){
    //     return true;
    // }
    // else{
    //   alert('Please login');
    //   router.navigate(['']);
    //   return false;
    // }
  } else{
    alert('Please login');
    router.navigate(['home']);
    return false
  }
    
}
