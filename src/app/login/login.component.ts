import { Component, OnInit, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginService } from '../service/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit{

  myForm: FormGroup | any;
  service = inject(LoginService);
  isLoginValue = false;
  date: any;

  constructor(private fb: FormBuilder,private loginService: LoginService) {}

  ngOnInit() {
    this.date = new Date;
    this.myForm = this.fb.group({
      username: ['', [Validators.required, Validators.pattern(/^[A-Za-z ]*$/)]],
      email: ['', [Validators.required, Validators.email]],
      mobile: ['', [Validators.required, Validators.pattern(/^[789]\d{9}$/)]],
      DOB: ['', Validators.required],
    });
    this.isLoginValue =  localStorage.getItem('isLogin') == 'yes' ? true : false;
    if(this.isLoginValue){
      this.myForm.setValue({
        username: localStorage.getItem('username'),
        email: localStorage.getItem('email'),
        mobile: localStorage.getItem('mobile'),
        DOB: localStorage.getItem('DOB')
      });
    }
  }

  onSubmit(form: FormGroup) {
    if(form.valid){ 
    this.loginService.setVariable(true);
    localStorage.setItem('isLogin', 'yes');
    this.isLoginValue = true
    localStorage.setItem('username', form.value.username);
    localStorage.setItem('email', form.value.email);
    localStorage.setItem('mobile', form.value.mobile);
    localStorage.setItem('DOB', form.value.DOB);
    console.log(`localStorage.getItem('username')`,localStorage.getItem('username'));
    console.log(`localStorage.getItem('email')`,localStorage.getItem('email'));
    console.log(`localStorage.getItem('mobile')`,localStorage.getItem('mobile'));
    console.log(`localStorage.getItem('DOB')`,localStorage.getItem('DOB'));
    }else{
      alert('Please fill all the requiedDetails');
    }
  }

  onInputChange(event: any){
    const inputControl = this.myForm.get('username');
    if(inputControl && inputControl.value){
      const sanitizedValue = inputControl.value.replace(/[^A-Za-z\s]/g,'');
      inputControl.setValue(sanitizedValue, {emitEvent: false});
    }
  }

  logout(){
    localStorage.setItem('isLogin', 'no');
    localStorage.setItem('userDetails','');
    localStorage.setItem('username', '');
    localStorage.setItem('email', '');
    localStorage.setItem('mobile','');
    localStorage.setItem('DOB', '');
    this.myForm.reset();
    this.isLoginValue = false;
    this.loginService.setVariable(false);
  }

}
