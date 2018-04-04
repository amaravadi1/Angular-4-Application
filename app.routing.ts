import { ModuleWithProviders } from '@angular/core';
import { RouterModule } from '@angular/router';
import {StudentComponent} from './student.component';
import {AppComponent} from './app.component';
export const router:ModuleWithProviders=RouterModule.forRoot([
                     {path:'',component:AppComponent},
                    {path:'student',component:StudentComponent},
                    {path:'studentById/:Id',component:StudentComponent},
                    
                  ])