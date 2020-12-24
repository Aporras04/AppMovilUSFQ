import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ConditionStudentPage } from './condition-student.page';

const routes: Routes = [
  {
    path: '',
    component: ConditionStudentPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ConditionStudentPageRoutingModule {}
