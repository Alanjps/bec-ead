import { Component } from '@angular/core';
import { IonicPage, NavParams, ViewController, ToastController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import moment from 'moment';
import { environment as ENV } from '../../environments/environment';
import { HttpServiceProvider } from '../../providers/http-service/http-service';

@IonicPage({
  name: 'holerite-modal'
})

@Component({
  selector: 'holerite',
  templateUrl: 'holerite.html'
})
export class HoleriteComponent {
  public ENV = ENV;
  public credential: any;
  public idiom: any;
  public project: string;
  public version : string;

  constructor(
    public navParams: NavParams,
    public storage : Storage,
    public viewCtrl: ViewController,
    public toastCtrl: ToastController,
    public httpService: HttpServiceProvider,
  ) {
    this.credential = navParams.data;

  }

  ionViewDidLoad() {
    this.storage.get('Project').then((value)=>{
      this.project = value;
      /*PROJETOS:
        marketing-house
        edicom
        vcc
      */
    });
    this.storage.get('LayoutVersion').then((value) => {
      this.version = value;
    });

    this.httpService.getAll('/api/holerite/get-url/1',{},'get').subscribe((result: any)=>{
      console.log("RESULTADO -> ",result);
    })
  }

  ngOnInit(){
    this.storage.get('Idiom').then((value) => {
      this.idiom = value;
    });
  }

  confirm(){
    this.viewCtrl.dismiss(this.credential);
  }
  
  cancel(){
    this.viewCtrl.dismiss();
  }
}
