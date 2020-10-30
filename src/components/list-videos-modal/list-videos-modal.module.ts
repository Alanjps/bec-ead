import { NgModule } from '@angular/core';
import { ListVideosModalComponent } from './list-videos-modal';
import { IonicModule, IonicPageModule } from 'ionic-angular';

@NgModule({
	declarations: [ListVideosModalComponent],
	imports: [
		IonicModule,
		IonicPageModule.forChild(ListVideosModalComponent)
	],
	exports: [ListVideosModalComponent]
})
export class ListVideosModalModule {}
