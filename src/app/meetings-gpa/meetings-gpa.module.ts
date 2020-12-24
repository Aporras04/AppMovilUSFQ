import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MeetingsGpaPageRoutingModule } from './meetings-gpa-routing.module';

import { MeetingsGpaPage } from './meetings-gpa.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MeetingsGpaPageRoutingModule
  ],
  declarations: [MeetingsGpaPage]
})
export class MeetingsGpaPageModule {}
