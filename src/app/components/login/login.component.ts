import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  Validators,
  FormControl,
} from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { CommonService } from 'src/app/services/common.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  userDetails!: any;
  loginForm: FormGroup = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
  });
  submitted = false;
  servicePath = 'users';
  constructor(
    private formBuilder: FormBuilder,
    private route: Router,
    private commonService: CommonService,
    private authService: AuthService
  ) {}

  ngOnInit() {
    this.commonService.getAllUsers(this.servicePath).subscribe((response) => {
      this.userDetails = response;
      console.log('All users ' + this.userDetails);
    });
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(4)]],
    });
  }

  get loginFormData() {
    return this.loginForm.controls;
  }

  onSubmit() {
    this.submitted = true;
    if (this.loginForm.invalid) {
      return;
    }
    console.log(this.loginForm.value);

    this.authService
      .validateUser(this.loginForm.value.email, this.loginForm.value.password)
      .subscribe((user) => {
        if (user) {
          alert('User login successfull');
          this.loginForm.reset();
          this.route.navigate(['/dashboard']);
        } else {
          alert('Invalid user');
        }
      });
  }

  onClickRegistration() {
    this.route.navigate(['/signup']);
  }
}
