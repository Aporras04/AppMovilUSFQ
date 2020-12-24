import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CreatedMeetingsPageRoutingModule } from './created-meetings-routing.module';

import { CreatedMeetingsPage } from './created-meetings.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CreatedMeetingsPageRoutingModule
  ],
  declarations: [CreatedMeetingsPage]
})
export class CreatedMeetingsPageModule {}
