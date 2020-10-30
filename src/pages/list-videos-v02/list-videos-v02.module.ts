import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ListVideosV02Page } from './list-videos-v02';
import { MenuSupModule } from '../../components/menu-sup/menu-sup.module'
import { ExpandableModule } from '../../components/expandable/expandable.module'

@NgModule({
  declarations: [
    ListVideosV02Page,
  ],
  imports: [
    IonicPageModule.forChild(ListVideosV02Page),
    MenuSupModule,
    ExpandableModule
  ],
})
export class ListVideosV02PageModule {}
