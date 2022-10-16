import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DetailRoutingModule } from './detail-routing.module';

import { DetailComponent } from './detail.component';
import { SharedModule } from '../shared/shared.module';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';

@NgModule({
  declarations: [DetailComponent],
  imports: [
      CommonModule,
      SharedModule,
      DetailRoutingModule,
      MatSidenavModule,
      MatExpansionModule,
      MatButtonModule,
      MatCardModule
  ]
})
export class DetailModule {}
