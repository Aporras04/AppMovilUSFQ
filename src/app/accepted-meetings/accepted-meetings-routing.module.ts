import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AcceptedMeetingsPage } from './accepted-meetings.page';

const routes: Routes = [
  {
    path: '',
    component: AcceptedMeetingsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AcceptedMeetingsPageRoutingModule {}
