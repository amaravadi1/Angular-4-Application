import { Component,OnInit } from '@angular/core';
import { Validators,FormControl,FormGroup,FormBuilder } from '@angular/forms';
import {UserService} from '../app/user.service';
import{UserMst}from '../app/user.model'
import {StudentMst} from '../app/student.model'
import {ActivatedRoute,Router} from '@angular/router';
@Component({
  selector: 'my-app',
  templateUrl: 'app/student.html',
  providers:[UserService],//optinal
  
})
export class StudentComponent implements OnInit { 
   
       // userform: FormGroup;
        
            studentForm:FormGroup;
            value:string;
            
        constructor(private fb:FormBuilder,private route:ActivatedRoute,private userService:UserService){

        }
        ngOnInit() {
            //alert("n
            /*
             this.route.queryParams.subscribe(params => {
              this.value=params["Id"];
              alert(this.value);
               });
              */
              alert(this.route.snapshot.params['Id']);
            
            this.studentForm = this.fb.group({
                'studentName':new FormControl(),
                'roll':new FormControl()
            });

            
    }
    valueSubmission(st:StudentMst){//same identical property for the formcontrolname
         alert(st.roll);

    }
    checkUser(user:UserMst){
        
   // let u=new UserMst();
   this.userService.getUserDetails(user);
       this.userService.getUserDetails(user);
       // alert(u.firstname);
    }
}
