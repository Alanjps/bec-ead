import { NgModule } from '@angular/core';
import { ExpandableComponent } from './expandable';
import { IonicModule } from 'ionic-angular';

@NgModule({
	declarations: [ExpandableComponent],
	imports: [IonicModule],
	exports: [ExpandableComponent]
})
export class ExpandableModule {}
