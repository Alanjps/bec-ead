import { NgModule } from '@angular/core';
import { QuizComponent } from './quiz';
import { IonicModule, IonicPageModule } from 'ionic-angular';

@NgModule({
	declarations: [QuizComponent],
	imports: [IonicModule, IonicPageModule.forChild(QuizComponent)],
	exports: [QuizComponent]
})
export class QuizModule {}
