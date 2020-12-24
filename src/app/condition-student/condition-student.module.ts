import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ConditionStudentPageRoutingModule } from './condition-student-routing.module';

import { ConditionStudentPage } from './condition-student.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ConditionStudentPageRoutingModule
  ],
  declarations: [ConditionStudentPage]
})
export class ConditionStudentPageModule {}
