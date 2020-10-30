import { NgModule } from '@angular/core';
import { UserFormComponent } from './user-form';
import { IonicModule, IonicPageModule } from 'ionic-angular';
import { BrMaskerModule } from 'brmasker-ionic-3';

@NgModule({
	declarations: [UserFormComponent],
	imports: [IonicModule, IonicPageModule.forChild(UserFormComponent), BrMaskerModule],
	exports: [UserFormComponent]
})
export class UserFormModule {}
