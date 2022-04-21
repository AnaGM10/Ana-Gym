import { Component, OnInit } from '@angular/core';
import {  FormControl, FormGroup, Validators } from '@angular/forms';
import {  Router } from '@angular/router';
import { IUserRegistration } from 'src/app/interfaces/user-auth';
import { UserRegistrationService } from 'src/app/service/user-registration.service';


@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.scss']
})
export class LogInComponent implements OnInit {

  logInForm: FormGroup;
  userData:any=''

  constructor(
    private userLogInService:UserRegistrationService,
    private router:Router
  ) { }

  logInFormm(){
    this.logInForm = new FormGroup({
      username:new FormControl('',[Validators.required]),
      password:new FormControl('',[Validators.required]),
    })
  }

  readAllUsers(){
    return this.userLogInService
      .readAllUsers()
      .subscribe(
        (data:IUserRegistration[])=>{
          const user = data.find(( u:IUserRegistration) =>
          u.username ==this.logInForm.value.username
            && u.password ==this.logInForm.value.password
          );
          if(user){
            alert('Log in successfully');
            this.logInForm.reset();
            this.router.navigate(["/members"]);
              console.log(user)
          } else {
            alert('User not Found! Please Register' );
          }
        },
        (err)=>{alert("no data found" +err)}
      ) 
  }

  ngOnInit(): void {
    this.logInFormm();
  }

}
