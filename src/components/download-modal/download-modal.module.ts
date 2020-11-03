import { NgModule } from '@angular/core';
import { DownloadModal } from './download-modal';
import { IonicModule, IonicPageModule } from 'ionic-angular';

@NgModule({
	declarations: [DownloadModal],
	imports: [
		IonicModule, 
		IonicPageModule.forChild(DownloadModal)
	],
	exports: [DownloadModal]
})
export class DownloadModalModule {}
