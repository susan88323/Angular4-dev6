import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";

import { CatDetailComponent } from './cat-detail.component';
import { CatYearsPipe } from './cat-years.pipe';


@NgModule({
  declarations: [
    CatDetailComponent,
    CatYearsPipe
  ],
  imports: [
    FormsModule,
    CommonModule
  ],
  exports: [CatDetailComponent],
})
export class CatsModule { }
