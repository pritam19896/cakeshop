import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit{

  myForm: FormGroup | any;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.myForm = this.fb.group({
      username: ['', [Validators.required, Validators.pattern(/^[A-Za-z ]*$/)]],
      email: ['', [Validators.required, Validators.email]],
      mobile: ['', [Validators.required, Validators.pattern(/^[789]\d{9}$/)]],
      DOB: ['', Validators.required],
    });
  }

  onSubmit(form: FormGroup) {
    if(form.valid){ 
    console.log('Valid?', form.valid);
    console.log('Name', form.value.username);
    console.log('Email', form.value.email);
    console.log('Message', form.value.mobile);
    console.log('myForm',this.myForm);
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

}
