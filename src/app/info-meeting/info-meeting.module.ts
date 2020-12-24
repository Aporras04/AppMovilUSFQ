import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InfoMeetingPageRoutingModule } from './info-meeting-routing.module';

import { InfoMeetingPage } from './info-meeting.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InfoMeetingPageRoutingModule
  ],
  declarations: [InfoMeetingPage]
})
export class InfoMeetingPageModule {}
