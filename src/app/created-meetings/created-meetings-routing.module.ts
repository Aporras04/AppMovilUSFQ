import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CreatedMeetingsPage } from './created-meetings.page';

const routes: Routes = [
  {
    path: '',
    component: CreatedMeetingsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CreatedMeetingsPageRoutingModule {}
