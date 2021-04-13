import { NgModule } from '@angular/core';
import { HoleriteComponent } from './holerite';
import { IonicModule, IonicPageModule } from 'ionic-angular';
import { BrMaskerModule } from 'brmasker-ionic-3';

@NgModule({
	declarations: [HoleriteComponent],
	imports: [IonicModule, IonicPageModule.forChild(HoleriteComponent), BrMaskerModule],
	exports: [HoleriteComponent]
})
export class HoleriteModule {}
