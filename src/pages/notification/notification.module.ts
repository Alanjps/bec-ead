import { NgModule, } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NotificationPage } from './notification';
import { MenuSupModule } from "../../components/menu-sup/menu-sup.module";
import { ExpandableModule } from '../../components/expandable/expandable.module';

@NgModule({
  declarations: [
    NotificationPage
  ],
  imports: [
    IonicPageModule.forChild(NotificationPage),
    MenuSupModule,
    ExpandableModule
  ]
})
export class NotificationPageModule {}
