import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ActiveUsersPageRoutingModule } from './active-users-routing.module';

import { ActiveUsersPage } from './active-users.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ActiveUsersPageRoutingModule
  ],
  declarations: [ActiveUsersPage]
})
export class ActiveUsersPageModule {}
