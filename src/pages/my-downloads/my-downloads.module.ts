import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MyDownloadsPage } from './my-downloads';

@NgModule({
  declarations: [
    MyDownloadsPage,
  ],
  imports: [
    IonicPageModule.forChild(MyDownloadsPage),
  ],
})
export class MyDownloadsPageModule {}
