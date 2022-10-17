import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DetailRoutingModule } from './detail-routing.module';

import { DetailComponent } from './detail.component';
import { SharedModule } from '../shared/shared.module';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material/core';
import { TimepickerModule } from 'ngx-bootstrap/timepicker';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import { CashformComponent } from './cashform/cashform/cashform.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [DetailComponent, CashformComponent],
  imports: [
      CommonModule,
      SharedModule,
      DetailRoutingModule,
      MatSidenavModule,
      MatExpansionModule,
      MatButtonModule,
      MatCardModule,
      MatFormFieldModule,
      MatSelectModule,
      MatInputModule,
      MatDatepickerModule,
      MatNativeDateModule,
      TimepickerModule,
      MatIconModule,
      MatDividerModule,
      ReactiveFormsModule
  ]
})
export class DetailModule {}
