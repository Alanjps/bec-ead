import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ChatPage } from './chat';
import { MenuSupModule } from '../../components/menu-sup/menu-sup.module'

@NgModule({
  declarations: [
    ChatPage,
  ],
  imports: [
    IonicPageModule.forChild(ChatPage),
    MenuSupModule
  ],
})
export class ChatPageModule {}
