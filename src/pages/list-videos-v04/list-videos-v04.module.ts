import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ListVideosV04Page } from './list-videos-v04';
import { MenuSupModule } from '../../components/menu-sup/menu-sup.module';
import { SearchPipeV02 } from '../../pipes/search/searchV02';
import { ExpandableModule } from '../../components/expandable/expandable.module';

@NgModule({
  declarations: [
    ListVideosV04Page,
    SearchPipeV02
  ],
  imports: [
    IonicPageModule.forChild(ListVideosV04Page),
    MenuSupModule,
    ExpandableModule
  ],
})
export class ListVideosPageV04Module {}
