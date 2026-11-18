import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TodoCrud01Component } from './component/todoCrud01/todo-crud01/todo-crud01.component';
import { PostCrud01Component } from './component/postCrud01/post-crud01/post-crud01.component';


import {MatButtonModule} from '@angular/material/button'
import {MatIconModule} from '@angular/material/icon'
import {MatCardModule} from '@angular/material/card'
import {MatDividerModule} from '@angular/material/divider'
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { StudentCrud01Component } from './component/student-crud01/student-crud01.component';
import { ProductCrud01Component } from './component/productCrud01/product-crud01/product-crud01.component'


@NgModule({
  declarations: [
    AppComponent,
    TodoCrud01Component,
    PostCrud01Component,
    StudentCrud01Component,
    ProductCrud01Component,
    
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatIconModule,
    MatSnackBarModule,
    MatCardModule,
    MatDividerModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
