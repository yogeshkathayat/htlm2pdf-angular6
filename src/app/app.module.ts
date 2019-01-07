import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule }  from '@angular/common';
import { RouterModule} from '@angular/router';

import { FormGroup , FormControl , ReactiveFormsModule , FormsModule } from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { PdfViewerModule } from 'ng2-pdf-viewer';
import { PdfViewerComponent } from './pdf-viewer/pdf-viewer.component';
import {MatCardModule} from '@angular/material/card';
@NgModule({
  declarations: [
    AppComponent,
    PdfViewerComponent,
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    PdfViewerModule,
    MatCardModule,
    RouterModule.forRoot([
      {
         path: 'app-pdf-viewer',
         component: PdfViewerComponent
      }
   ])
  ],
  
  providers: [],
  bootstrap: [AppComponent]

})
export class AppModule { }
