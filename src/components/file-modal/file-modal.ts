import { NavParams, Slides, ViewController, IonicPage} from 'ionic-angular';
import { Component, ViewChild } from '@angular/core';
import { Storage } from '@ionic/storage';

@IonicPage({
  name: 'file-modal'
})
@Component({
  selector: 'file-modal',
  templateUrl: 'file-modal.html'
})
export class FileModalComponent {

  public videos: Array<any>;
  public file: any;
  public project: string = '';

  @ViewChild(Slides) slides: Slides;
  constructor( 
    public navParams: NavParams,
    public viewCtrl: ViewController,
    public storage: Storage,
    ){
    this.file = navParams.data.file;
    
  }

  ngOnInit () {
    this.storage.get('Project').then((value) => {
      this.project = value;
    })
  }

  confirm(){
    let data = { sendFile: true };
    this.viewCtrl.dismiss(data);
  }

  cancel(){
    this.viewCtrl.dismiss();
  }


}
