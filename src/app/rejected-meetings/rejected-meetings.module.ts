import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RejectedMeetingsPageRoutingModule } from './rejected-meetings-routing.module';

import { RejectedMeetingsPage } from './rejected-meetings.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RejectedMeetingsPageRoutingModule
  ],
  declarations: [RejectedMeetingsPage]
})
export class RejectedMeetingsPageModule {}
