import { IonicPage, LoadingController, NavController, NavParams, Slides, ViewController} from 'ionic-angular';
import { Component, ViewChild } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';


@IonicPage({
  name: 'list-videos-modal'
})

@Component({
  selector: 'list-videos-modal',
  templateUrl: 'list-videos-modal.html'
})
export class ListVideosModalComponent {

  public videos: Array<any>;
  @ViewChild(Slides) slides: Slides;
  @ViewChild('videoPlayer') mVideoPlayer: any;

  public exibirEmbed: boolean = false;
  public urlEmbed: SafeResourceUrl;
  public exibirVideo: boolean = false;
  public exibirThumb: boolean = false;
  public playVideo: boolean = false;
  private contents: [any];
  public showPrevious: boolean = false;
  public showNext: boolean = false;
  public selectIndex: number = 0;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public viewCtrl: ViewController,
    private dom: DomSanitizer,
    public loadingCtrl: LoadingController,
  ) {
    this.contents = navParams.data;

    this.getVideos(this.contents);
  }

  getVideos(contents){
    //separa somente os videos e seleciona o primeiro conteúdo de vídeo disponível.
    this.videos = [];
    contents.forEach(element => {
      if (element.tipo == 'video' || (element.url != null && element.tipo == "undefined" ) ) this.videos.push(element);
    });

    if (this.videos.length > 0) {
      this.showVideo(this.videos[0])
      this.selectIndex = 0;
      if (this.videos.length > 1){
        this.showNext = true;
      }
    };
  }

  dismiss() {
    this.exibirEmbed = false;
    this.exibirVideo = false;
    this.playVideo = false;

    this.viewCtrl.dismiss();
  }

  sanitizer(vid) {
    return this.dom.bypassSecurityTrustResourceUrl(vid);
  }

  showVideo(conteudo) {
    let loading = this.loadingCtrl.create({
      content: 'Espere...'
    });
    loading.present();
    
    if(conteudo.url){
      this.exibirEmbed = true;
      this.exibirVideo = false;
    }else if(conteudo.path){
      this.exibirEmbed = false;
      this.exibirVideo = true;
    }

    this.playVideo = true;

    if (this.exibirVideo == true) {
      setTimeout(() => {
        let video = this.mVideoPlayer.nativeElement
        video.src = conteudo.path;
        loading.dismiss();
      }, 500);
    }else if (this.exibirEmbed == true){
      this.urlEmbed = this.sanitizer(conteudo.url);
      loading.dismiss();
    }
  }

  selectNext(){
    let nextIndex = this.selectIndex + 1;
    if (this.videos.length -1 >= nextIndex ) {
      this.selectIndex = nextIndex;
      this.showVideo(this.videos[nextIndex]);
      if (nextIndex == this.videos.length -1) this.showNext = false;
      this.showPrevious = true;
    }
  }

  selectPrevious(){
    let previousIndex = this.selectIndex - 1;

    if (previousIndex >= 0 ) {
      this.selectIndex = previousIndex;
      this.showVideo(this.videos[previousIndex]);
      if (previousIndex == 0) this.showPrevious = false;
      this.showNext = true;
    }
  }
}
