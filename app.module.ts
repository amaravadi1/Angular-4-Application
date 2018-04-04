import { NgModule }      from '@angular/core';
import { FormsModule, ReactiveFormsModule }      from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent }  from './app.component';
import {UserService} from '../app/user.service';
import{HolderComponent} from './app1.component';
import {Router, NavigationExtras} from "@angular/router";
import {router} from './app.routing';
import{StudentComponent} from './student.component';
@NgModule({
  imports:      [ BrowserModule, BrowserAnimationsModule, ReactiveFormsModule,
                  FormsModule ,router],
  declarations: [ AppComponent,StudentComponent,HolderComponent ],
 
  bootstrap:    [ HolderComponent ]
})
export class AppModule { }
