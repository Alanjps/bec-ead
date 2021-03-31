import { NavParams, Slides, ViewController, AlertController, IonicPage} from 'ionic-angular';
import { Component, ViewChild } from '@angular/core';
import { Storage } from '@ionic/storage';
import { environment as ENV } from '../../environments/environment';

@IonicPage({
  name: 'photo-modal'
})

@Component({
  selector: 'photo-modal',
  templateUrl: 'photo-modal.html'
})
export class PhotoModalComponent {

  public ENV = ENV;
  public videos: Array<any>;
  public photo: any;
  public categories: any;
  public data: boolean = false;
  public selectedCategory: any = null;
  public contester: boolean = false;
  public contestEnabled: boolean = false;
  public userCategoriesInContest: any;
  public idiom: string = '';

  @ViewChild(Slides) slides: Slides;

  constructor(
    public navParams: NavParams,
    public viewCtrl: ViewController,
    public alertCtrl: AlertController,
    public storage: Storage,
  ) {
    this.photo = navParams.data.photo;
    this.categories = navParams.data.categories;
    this.contestEnabled = navParams.data.contestEnabled;
    this.userCategoriesInContest = navParams.data.userCategoriesInContest;
  }

  ngOnInit(){
    this.storage.get('Idiom').then((value) => {
      this.idiom = value;
    })
  }

  categoryChanged(){
    this.contester = false;
  }

  signContest(){
    if (this.contester == true){
      this.contester = false;
    }else if (this.selectedCategory == null){
      let alertText = this.idiom == '01' ? 'Selecione uma categoria primeiramente.' : this.idiom == '02' ? 'Por favor, seleccione una categoría primero.': '';
      this.showAlert(alertText)
    }else{
      let alreadyInContest = this.userCategoriesInContest.filter((ucc) => {
        return ucc.inContest == true && ucc.categoryId == this.selectedCategory
      }).length > 0 ? true : false;
      
      if ( alreadyInContest == true){
        let alertText = this.idiom == '01' ? 'Você já possui 1 foto concorrendo nessa categoria.' : this.idiom == '02' ? 'Ya tienes 1 foto compitiendo en esa categoría': '';
        this.showAlert(alertText);
        this.contester = false;
      }else{
        this.contester = true;
      }
    }
  }

  showAlert(subTitle) {
    const alert = this.alertCtrl.create({
      title: this.idiom == '01' ? 'Atenção!' : this.idiom == '02' ? '¡Atención!': '',
      subTitle: subTitle,
      buttons: ['OK']
    });
    alert.present();
  }

  confirm(){
    if(this.selectedCategory == null){
      let alertText = this.idiom == '01' ? 'Selecione uma categoria primeiramente.' : this.idiom == '02' ? 'Por favor, seleccione una categoría primero.': '';
      this.showAlert(alertText)
    }else{
      let data = { sendFile: true, contest: this.contester, categoryId: this.selectedCategory };
      this.viewCtrl.dismiss(data);
    }
  }

  cancel(){
    this.viewCtrl.dismiss();
  }
}
