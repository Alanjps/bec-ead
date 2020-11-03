import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PhotoPage } from './photo';
import { MenuSupModule } from '../../components/menu-sup/menu-sup.module';
import { FileModalModule } from '../../components/file-modal/file-modal.module';

@NgModule({
  declarations: [
    PhotoPage,
  ],
  imports: [
    IonicPageModule.forChild(PhotoPage),
    MenuSupModule,
    FileModalModule
  ],
})
export class PhotoPageModule {}
