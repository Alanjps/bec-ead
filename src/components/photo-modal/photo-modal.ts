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
  public subcategories: any;
  public data: boolean = false;
  public selectedCategory: any = null;
  public selectedSubcategories: any = null;
  public contester: boolean = false;
  public contestEnabled: boolean = false;
  public userCategoriesInContest: any;
  public idiom: string = '';
  public selectedSubcategoryArray :any = [];
  public observation: string = '';
  public observationAnswer: string = '';
  @ViewChild(Slides) slides: Slides;

  constructor(
    public navParams: NavParams,
    public viewCtrl: ViewController,
    public alertCtrl: AlertController,
    public storage: Storage,
  ) {
    this.photo = navParams.data.photo;
    this.categories = navParams.data.categories;
    this.subcategories = navParams.data.subcategories;
    if(this.subcategories && this.subcategories.length > 0){
      this.subcategories = this.subcategories.map((s) => {
        return {...s, checked: false}
      })
    }
    this.contestEnabled = navParams.data.contestEnabled;
    this.userCategoriesInContest = navParams.data.userCategoriesInContest;
    this.observation = navParams.data.observation;
  }

  ngOnInit(){
    this.storage.get('Idiom').then((value) => {
      this.idiom = value;
    })
  }

  categoryChanged(){
    this.contester = false;
  }

  selectSubcategory(data){
    if (data.checked == true) {
       this.selectedSubcategoryArray.push(data.id);
     } else {
      let newArray = this.selectedSubcategoryArray.filter(function(el) {
        return el !== data.id;
      });
      this.selectedSubcategoryArray = newArray;
    }
    console.log(this.selectedSubcategoryArray);
   }

  signContest(){
    if (this.contester == true){
      this.contester = false;
    }else if (this.selectedCategory == null){
      let alertText = this.idiom == '01' ? 'Selecione uma categoria primeiramente.' : this.idiom == '02' ? 'Por favor, seleccione una categoría primero.': '';
      this.showAlert(alertText)
    }else{
      let alreadyInContest = false;
      if (this.userCategoriesInContest){
        alreadyInContest = this.userCategoriesInContest.filter((ucc) => {
          return ucc.inContest == true && ucc.categoryId == this.selectedCategory
        }).length > 0 ? true : false;
      }
      
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
    }else if(this.subcategories && this.subcategories.length > 0 && this.selectedSubcategoryArray.length == 0){
      let alertText = this.idiom == '01' ? 'Selecione uma ou mais subcategorias.' : this.idiom == '02' ? 'Por favor, seleccione una o más subcategorías.': '';
      this.showAlert(alertText)
    }else if(this.observation && this.observation != '' && this.observationAnswer.trim() == ''){
      let alertText = this.idiom == '01' ? 'Insira uma resposta.' : this.idiom == '02' ? 'Ingrese una respuesta': '';
      this.showAlert(alertText)
    }else{
      let data = { sendFile: true, contest: this.contester, categoryId: this.selectedCategory, subcategories: this.selectedSubcategoryArray, observation: this.observationAnswer };
      this.viewCtrl.dismiss(data);
    }
  }

  cancel(){
    this.viewCtrl.dismiss();
  }
}
