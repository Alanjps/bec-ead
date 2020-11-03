import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ListVideosPage } from './list-videos';
import { MenuSupModule } from '../../components/menu-sup/menu-sup.module';
import { SearchPipe } from '../../pipes/search/search';
import { ExpandableModule } from '../../components/expandable/expandable.module';

@NgModule({
  declarations: [
    ListVideosPage,
    SearchPipe
  ],
  imports: [
    IonicPageModule.forChild(ListVideosPage),
    MenuSupModule,
    ExpandableModule
  ],
})
export class ListVideosPageModule {}
