import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private yourVariable: any = null;

  constructor() { }

  setVariable(newValue: any){
    this.yourVariable = newValue;
  }

  haveaccess(){ 
    // console.log('value',value);
    // let loginValue:boolean = value;
    // return loginValue;
    return this.yourVariable;
  }
}
