import { NgModule } from '@angular/core';
import { ProvaModalComponent } from './prova-modal';
import { IonicModule, IonicPageModule } from 'ionic-angular';

@NgModule({
	declarations: [ProvaModalComponent],
	imports: [IonicModule, IonicPageModule.forChild(ProvaModalComponent)],
	exports: [ProvaModalComponent]
})
export class ProvaModalModule {}
