import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FullPromoHomePage } from './full-promo-home';
import { MenuSupModule } from '../../components/menu-sup/menu-sup.module'

@NgModule({
  declarations: [
    FullPromoHomePage
  ],
  imports: [
    IonicPageModule.forChild(FullPromoHomePage),
    MenuSupModule
  ],
})
export class FullPromoHomePageModule {}
