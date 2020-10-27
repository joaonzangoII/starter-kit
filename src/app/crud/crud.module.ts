import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CrudRoutingModule } from './crud-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CrudComponent } from './list/crud.component';
import { DetailsComponent } from './details/details.component';
import { CreateComponent } from './create/create.component';

@NgModule({
  declarations: [CrudComponent, DetailsComponent, CreateComponent],
  imports: [CommonModule, CrudRoutingModule, HttpClientModule, FormsModule],
})
export class CrudModule {}
