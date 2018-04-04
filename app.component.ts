import { Component,OnInit } from '@angular/core';
import { Validators,FormControl,FormGroup,FormBuilder } from '@angular/forms';
import {UserService} from '../app/user.service';
import{UserMst}from '../app/user.model'
import {Router, NavigationExtras} from "@angular/router";

@Component({
  selector: 'my-app',
  templateUrl: 'app/appForm.html',
  providers:[UserService],
  
})
export class AppComponent implements OnInit { 
   
        userform: FormGroup;
      
          constructor(private fb: FormBuilder,private userService:UserService,private router: Router) {
           // alert("con");
        }
        ngOnInit() {
            //alert("ng");
            this.userform = this.fb.group({
                'firstname': new FormControl('',Validators.compose([Validators.required, Validators.minLength(5), Validators.maxLength(10)])),
                
                'middleName':new FormControl(''),
                'lastname': new FormControl(''),
                'password': new FormControl(''),
                'description': new FormControl(''),
            });
    }

    checkUser(user:UserMst){
        alert('submit event occurs');
        let Id=10;
         this.router.navigate(['/studentById',user.firstname]);
        //this.router.navigate(['/student']);
        //alert(user.firstname);
   // let u=new UserMst();
       this.userService.getUserDetails(user);
       // alert(u.firstname);
    }
}
