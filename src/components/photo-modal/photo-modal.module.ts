import { NgModule } from '@angular/core';
import { PhotoModalComponent } from './photo-modal';
import { IonicModule, IonicPageModule } from 'ionic-angular';

@NgModule({
	declarations: [PhotoModalComponent],
	imports: [IonicModule, IonicPageModule.forChild(PhotoModalComponent)],
	exports: [PhotoModalComponent]
})
export class PhotoModalModule {}
