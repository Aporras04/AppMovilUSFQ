import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InfoMeetingPage } from './info-meeting.page';

const routes: Routes = [
  {
    path: '',
    component: InfoMeetingPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InfoMeetingPageRoutingModule {}
