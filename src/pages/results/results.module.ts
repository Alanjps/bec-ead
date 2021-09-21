import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ResultsPage } from './results';
import { MenuSupModule } from '../../components/menu-sup/menu-sup.module';

@NgModule({
  declarations: [
    ResultsPage,
  ],
  imports: [
    IonicPageModule.forChild(ResultsPage),
    MenuSupModule,
  ],
})
export class ResultsPageModule {}
