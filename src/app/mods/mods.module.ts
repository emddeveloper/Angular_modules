import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModsRoutingModule } from './mods-routing.module';
import { ModshomeComponent } from './modshome/modshome.component';
import { ModalComponent } from './modal/modal.component';
import { SharedModule } from '../shared/shared.module';
import { AgemodalComponent } from './agemodal/agemodal.component';
import { AccordianComponent } from './accordian/accordian.component';

@NgModule({
  declarations: [
    ModshomeComponent,
    ModalComponent,
    AgemodalComponent,
    AccordianComponent,
  ],
  imports: [CommonModule, ModsRoutingModule, SharedModule],
})
export class ModsModule {}
