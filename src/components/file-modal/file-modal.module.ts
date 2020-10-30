import { NgModule } from '@angular/core';
import { FileModalComponent } from './file-modal';
import { IonicModule, IonicPageModule } from 'ionic-angular';

@NgModule({
	declarations: [FileModalComponent],
	imports: [
		IonicModule,
		IonicPageModule.forChild(FileModalComponent)
	],
	exports: [FileModalComponent]
})
export class FileModalModule {}
