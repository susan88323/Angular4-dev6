import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";

import { CatDetailComponent } from './cat-detail.component';
import { CatYearsPipe } from './cat-years.pipe';
import { CatRoutingModule } from "./cat-routing.module";
import { SharedModule } from "../shared/shared.module";
import { CatsComponent } from "./cats.component";



@NgModule({
  declarations: [
    CatDetailComponent,
    CatYearsPipe,
    CatsComponent
  ],
  imports: [
    FormsModule,
    CommonModule,
    CatRoutingModule,
    SharedModule
  ],
})
export class CatsModule { }
