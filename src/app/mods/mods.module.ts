import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModsRoutingModule } from './mods-routing.module';
import { ModshomeComponent } from './modshome/modshome.component';
import { ModalComponent } from './modal/modal.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [ModshomeComponent, ModalComponent],
  imports: [CommonModule, ModsRoutingModule, SharedModule],
})
export class ModsModule {}
