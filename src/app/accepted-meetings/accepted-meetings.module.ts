import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AcceptedMeetingsPageRoutingModule } from './accepted-meetings-routing.module';

import { AcceptedMeetingsPage } from './accepted-meetings.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AcceptedMeetingsPageRoutingModule
  ],
  declarations: [AcceptedMeetingsPage]
})
export class AcceptedMeetingsPageModule {}
