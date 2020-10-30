import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EditUserV02Page } from './edit-user-v02';
import { BrMaskerModule } from 'brmasker-ionic-3';
import { NgxQRCodeModule } from 'ngx-qrcode2';
import { MenuSupModule } from '../../components/menu-sup/menu-sup.module'
import { DownloadModalModule } from '../../components/download-modal/download-modal.module';

@NgModule({
  declarations: [
    EditUserV02Page
  ],
  imports: [
    IonicPageModule.forChild(EditUserV02Page),
    BrMaskerModule,
    NgxQRCodeModule,
    MenuSupModule,
    DownloadModalModule
  ],
})
export class EditUserV02PageModule {}
