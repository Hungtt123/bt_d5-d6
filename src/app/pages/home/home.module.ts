import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { NbActionsModule, NbButtonModule, NbCardModule, NbTabsetModule, NbUserModule,  } from '@nebular/theme';


@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    NbTabsetModule,
    NbUserModule,
    NbActionsModule,
    NbButtonModule,
    NbCardModule,

  ]
})
export class HomeModule { }
