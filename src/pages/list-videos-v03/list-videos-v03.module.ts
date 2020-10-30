import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ListVideosV03Page } from './list-videos-v03';
import { MenuSupModule } from '../../components/menu-sup/menu-sup.module'
import { ExpandableModule } from '../../components/expandable/expandable.module'

@NgModule({
  declarations: [
    ListVideosV03Page,
  ],
  imports: [
    IonicPageModule.forChild(ListVideosV03Page),
    MenuSupModule,
    ExpandableModule
  ],
})
export class ListVideosV03PageModule {}
