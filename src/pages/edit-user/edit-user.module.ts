import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EditUserPage } from './edit-user';
import { BrMaskerModule } from 'brmasker-ionic-3';
import { NgxQRCodeModule } from 'ngx-qrcode2';
import { MenuSupModule } from '../../components/menu-sup/menu-sup.module'
import { DownloadModalModule } from '../../components/download-modal/download-modal.module';
import { AngularCropperjsModule } from 'angular-cropperjs';

@NgModule({
  declarations: [
    EditUserPage
  ],
  imports: [
    IonicPageModule.forChild(EditUserPage),
    BrMaskerModule,
    NgxQRCodeModule,
    MenuSupModule,
    DownloadModalModule,
    AngularCropperjsModule
  ],
})
export class EditUserPageModule {}
