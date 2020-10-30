import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RecoveryPasswordPage } from './recovery-password';
import { BrMaskerModule } from 'brmasker-ionic-3';

@NgModule({
  declarations: [
    RecoveryPasswordPage,
  ],
  imports: [
    IonicPageModule.forChild(RecoveryPasswordPage),
    BrMaskerModule
  ],
})
export class RecoveryPasswordPageModule {}
