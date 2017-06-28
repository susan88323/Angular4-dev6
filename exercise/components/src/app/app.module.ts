import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from "@angular/forms";

import { AppComponent } from './app.component';
import { CatDetailComponent } from './cat-detail.component';
import { CatYearsPipe } from './cat-years.pipe';
import { CatService } from './cat.service';


@NgModule({
  declarations: [
    AppComponent,
    CatDetailComponent,
    CatYearsPipe
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [CatService],
  bootstrap: [AppComponent]
})
export class AppModule { }
