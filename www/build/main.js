webpackJsonp([20],{125:function(e,t,o){"use strict";o.d(t,"a",function(){return l});o(4);var a=o(65),n=(o(58),o(206)),r=(o.n(n),o(393)),s=(o.n(r),o(1)),i=o.n(s),l=(o(50),function(){function e(e,t,o,a,n){var r=this;this.http=e,this.storage=t,this.toastCtrl=o,this._platform=a,this.oneSignal=n,this.msg="Favor fazer o login",this.url="/vcc",this.storage.get("Project").then(function(e){switch(e){case"localhost":r.url="/lch",r._platform.is("cordova")&&(r.url="http://ead.localhost");break;case"marketing-house":r.url="/mkh",r._platform.is("cordova")&&(r.url="https://homolog.marketinghouse.com.br");break;case"edicom":r.url="/edc",r._platform.is("cordova")&&(r.url="https://edicom.becinteligencia.com");break;case"hkt369":r.url="/hkt369",r._platform.is("cordova")&&(r.url="https://descubre.hkt369.com");break;case"know-house":r.url="/knowh",r._platform.is("cordova")&&(r.url="https://knowhouse.marketinghouse.com.br");break;case"simples-trade":r.url="/strade",r._platform.is("cordova")&&(r.url="https://simplestrade.becinteligencia.com");break;case"r2m":r.url="/r2m",r._platform.is("cordova")&&(r.url="https://readytomarket.becinteligencia.com");break;case"ava":r.url="/ava",r._platform.is("cordova")&&(r.url="https://ava.insighttech.com.br/");break;default:r.url="/vcc",r._platform.is("cordova")&&(r.url="https://vcc.becinteligencia.com")}})}return e.prototype.request=function(e,t){var o=new a.d;o.append("Content-Type","application/json");var n=new a.g({headers:o});return this.http.post(this.url+e,t,n).map(function(e){return e.json()}).toPromise().then(function(e){return e})},e.prototype.login=function(e){var t=this,o=new a.d;o.append("Content-Type","application/json");var n=new a.g({headers:o});return this.http.post(this.url+"/api/usuarios/logar",e,n).map(function(e){return e.json()}).toPromise().then(function(o){return o.id>0&&(t.storage.set("clienteId",o.id),t.storage.set("clienteNome",o.nome),t.storage.set("clienteEmail",o.email),t.storage.set("clienteWhatsapp",o.whatsapp),t.storage.set("clienteDocumento",o.documento),t.storage.set("clienteProfileId",o.profile_id),t.storage.set("clienteEmpresa",o.empresa),t.storage.set("clienteNascimento",o.nascimento),t.storage.set("clienteThumb",o.thumb),t.storage.set("clienteCompanyId",o.company_id),t.storage.set("clienteSavePassword",e.password),t.storage.set("clienteSaveDocumento",o.documento),!0)})},e.prototype.firstAcess=function(e){var t=this,o=new a.d;o.append("Content-Type","application/json");var n=new a.g({headers:o});return this.http.post(this.url+"/api/usuarios/primeiro-acesso",e,n).map(function(e){return e.json()}).toPromise().then(function(e){return e.id>0&&(t.storage.set("clienteId",e.id),t.storage.set("clienteNome",e.nome),t.storage.set("clienteEmail",e.email),t.storage.set("clienteWhatsapp",e.whatsapp),t.storage.set("clienteDocumento",e.documento),t.storage.set("clienteProfileId",e.profile_id),t.storage.set("clienteEmpresa",e.empresa),t.storage.set("clienteNascimento",e.nascimento),t.storage.set("clienteThumb",e.thumb),t.storage.set("clienteCompanyId",e.company_id),t.storage.set("clienteFirst",e.first),!0)})},e.prototype.register=function(e){var t=this,o=new a.d;o.append("Content-Type","application/json");var n=new a.g({headers:o});return this.http.post(this.url+"/api/usuarios/cadastrar",e,n).map(function(e){return e.json()}).toPromise().then(function(e){return e.nascimento=e.nascimento?i()(e.nascimento.date).format("DD/MM/YYYY"):"",e.id>0?(t.storage.set("clienteId",e.id),t.storage.set("clienteNome",e.nome),t.storage.set("clienteEmail",e.email),t.storage.set("clienteWhatsapp",e.whatsapp),t.storage.set("clienteDocumento",e.documento),t.storage.set("clienteProfileId",e.profile_id),t.storage.set("clienteEmpresa",e.empresa),t.storage.set("clienteNascimento",e.nascimento),t.storage.set("clienteThumb",e.thumb),t.storage.set("clienteCompanyId",e.company_id),e):e})},e.prototype.recoveryPassword=function(e){var t=this,o=new a.d;o.append("Content-Type","application/json");var n=new a.g({headers:o});return this.http.post(this.url+"/api/usuarios/reset-senha",e,n).map(function(e){return e.json()}).toPromise().then(function(e){return e.id>0&&(t.storage.set("clienteId",e.id),t.storage.set("clienteNome",e.nome),t.storage.set("clienteEmail",e.email),t.storage.set("clienteWhatsapp",e.whatsapp),t.storage.set("clienteDocumento",e.documento),t.storage.set("clienteProfileId",e.profile_id),t.storage.set("clienteEmpresa",e.empresa),t.storage.set("clienteNascimento",e.nascimento),t.storage.set("clienteThumb",e.thumb),t.storage.set("clienteCompanyId",e.company_id),t.storage.set("clienteFirst",e.first),!0)})},e.prototype.getJob=function(){var e=new a.d;e.append("Content-Type","application/json");var t=new a.g({headers:e});return this.http.post(this.url+"/api/usuarios/ocupacoes",t).map(function(e){return e.json()}).toPromise().then(function(e){return e})},e.prototype.userIsLogged=function(){var e=this;return this.storage.get("clienteId").then(function(t){if(t)return!0;return e.toastCtrl.create({message:e.msg,duration:3e3}).present(),!0})},e.prototype.logout=function(){var e=this;this.storage.get("clienteId").then(function(t){e.storage.get("clienteEmail").then(function(o){e.oneSignal.getIds().then(function(a){e.http.post(e.url+"/api/usuarios/remove-device",{id:t,email:o,device_id:a.userId,type:"android"}).subscribe(function(e){})}).catch(function(){console.log("Erro ao obter os dados do Onesignal")}),e.storage.remove("clientId"),e.storage.remove("clienteNome"),e.storage.remove("clienteEmail"),e.storage.remove("clienteWhatsapp"),e.storage.remove("clienteDocumento"),e.storage.remove("clienteProfileId"),e.storage.remove("clienteEmpresa"),e.storage.remove("clienteNascimento"),e.storage.remove("clienteThumb"),e.storage.remove("clienteCompanyId"),e.storage.remove("clienteId")})})},e.prototype.logoutSave=function(){this.storage.remove("clienteSavePassword"),this.storage.remove("clienteSaveDocumento")},e}())},152:function(e,t,o){"use strict";o(4),o(98),o(0);var a={PUSHER_APP_ID:"1156523",PUSHER_APP_KEY:"7b8b5ea20f7a185be995",PUSHER_APP_SECRET:"789567e75724f82b17dc",PUSHER_APP_CLUSTER:"us2"};o(34);o.d(t,"a",function(){return n});var n=function(){function e(e,t){var o=this;this.http=e,this.storage=t,this.storage.get("clienteId").then(function(e){var t=new Pusher(a.PUSHER_APP_KEY,{cluster:a.PUSHER_APP_CLUSTER,encrypted:!0});o.channel=t.subscribe("chat."+e)})}return e.prototype.init=function(){return this.channel},e}()},164:function(e,t){function o(e){return Promise.resolve().then(function(){throw new Error("Cannot find module '"+e+"'.")})}o.keys=function(){return[]},o.resolve=o,e.exports=o,o.id=164},188:function(e,t,o){function a(e){var t=n[e];return t?o.e(t[1]).then(function(){return o(t[0])}):Promise.reject(new Error("Cannot find module '"+e+"'."))}var n={"../components/download-modal/download-modal.module.ngfactory":[417,14],"../components/file-modal/file-modal.module.ngfactory":[418,13],"../components/list-videos-modal/list-videos-modal.module.ngfactory":[419,19],"../components/photo-modal/photo-modal.module.ngfactory":[420,18],"../components/quiz/quiz.module.ngfactory":[421,15],"../components/user-form/user-form.module.ngfactory":[422,12],"../pages/chat/chat.module.ngfactory":[431,11],"../pages/edit-user-v02/edit-user-v02.module.ngfactory":[427,1],"../pages/edit-user/edit-user.module.ngfactory":[428,0],"../pages/list-videos-v02/list-videos-v02.module.ngfactory":[432,8],"../pages/list-videos-v03/list-videos-v03.module.ngfactory":[434,7],"../pages/list-videos-v04/list-videos-v04.module.ngfactory":[433,3],"../pages/list-videos/list-videos.module.ngfactory":[435,2],"../pages/login/login.module.ngfactory":[429,10],"../pages/my-downloads/my-downloads.module.ngfactory":[423,16],"../pages/notification/notification.module.ngfactory":[424,5],"../pages/photo/photo.module.ngfactory":[436,4],"../pages/recovery-password/recovery-password.module.ngfactory":[425,9],"../pages/register/register.module.ngfactory":[426,6],"../pages/tabs/tabs.module.ngfactory":[430,17]};a.keys=function(){return Object.keys(n)},a.id=188,e.exports=a},356:function(e,t,o){"use strict";o.d(t,"a",function(){return a});var a=function(){return!!window.cordova}},357:function(e,t,o){"use strict";function a(e){return r["ɵvid"](0,[(e()(),r["ɵeld"](0,0,null,null,2,"ion-nav",[],null,null,null,x.b,x.a)),r["ɵprd"](6144,null,V.a,null,[Z.a]),r["ɵdid"](2,4374528,null,0,Z.a,[[2,q.a],[2,J.a],B.a,G.a,K.a,r.ElementRef,r.NgZone,r.Renderer,r.ComponentFactoryResolver,W.l,Y.a,[2,Q.a],X.a,r.ErrorHandler],{root:[0,"root"]},null),(e()(),r["ɵted"](-1,null,["\n"]))],function(e,t){e(t,2,0,t.component.rootPage)},null)}Object.defineProperty(t,"__esModule",{value:!0});var n=o(23),r=o(0),s=(o(4),o(13)),i=o(98),l=o(65),c=o(133),d=o(127),u=o(128),p=o(136),m=o(66),g=o(67),f=o(34),h=(o(58),o(125)),b=o(59),y=o(50),v=o(356),j=this&&this.__awaiter||function(e,t,o,a){return new(o||(o=Promise))(function(n,r){function s(e){try{l(a.next(e))}catch(e){r(e)}}function i(e){try{l(a.throw(e))}catch(e){r(e)}}function l(e){e.done?n(e.value):new o(function(t){t(e.value)}).then(s,i)}l((a=a.apply(e,t||[])).next())})},w=this&&this.__generator||function(e,t){function o(o){return function(s){return function(o){if(a)throw new TypeError("Generator is already executing.");for(;i;)try{if(a=1,n&&(r=n[2&o[0]?"return":o[0]?"throw":"next"])&&!(r=r.call(n,o[1])).done)return r;switch(n=0,r&&(o=[0,r.value]),o[0]){case 0:case 1:r=o;break;case 4:return i.label++,{value:o[1],done:!1};case 5:i.label++,n=o[1],o=[0];continue;case 7:o=i.ops.pop(),i.trys.pop();continue;default:if(r=i.trys,!(r=r.length>0&&r[r.length-1])&&(6===o[0]||2===o[0])){i=0;continue}if(3===o[0]&&(!r||o[1]>r[0]&&o[1]<r[3])){i.label=o[1];break}if(6===o[0]&&i.label<r[1]){i.label=r[1],r=o;break}if(r&&i.label<r[2]){i.label=r[2],i.ops.push(o);break}r[2]&&i.ops.pop(),i.trys.pop();continue}o=t.call(e,i)}catch(e){o=[6,e],n=0}finally{a=r=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,s])}}var a,n,r,s,i={label:0,sent:function(){if(1&r[0])throw r[1];return r[1]},trys:[],ops:[]};return s={next:o(0),throw:o(1),return:o(2)},"function"==typeof Symbol&&(s[Symbol.iterator]=function(){return this}),s},k=function(){function e(e,t,o,a,n,r){var s=this;this.oneSignal=n,this.rootPage="",this.projectNumber=null,this.projectName=null,this.onesignalAppId="",this.firebaseSenderId="",this.clearStorage(e),t.is("android")?e.set("Platform","android"):t.is("ios")&&e.set("Platform","ios"),t.ready().then(function(){switch(o.styleDefault(),a.hide(),s.projectNumber=2,s.projectNumber){case 0:s.onesignalAppId="946eb156-716e-4000-853f-18f41cc2b193",s.firebaseSenderId="23981024898",s.projectName="localhost",e.set("Idiom","01");break;case 1:s.onesignalAppId="946eb156-716e-4000-853f-18f41cc2b193",s.firebaseSenderId="23981024898",s.projectName="ead",e.set("Idiom","01");break;case 2:s.onesignalAppId="c3765e9e-79b4-4dbc-b3ad-a31396017591",s.firebaseSenderId="981777081301",s.projectName="edicom",e.set("Idiom","02");break;case 3:s.onesignalAppId="883bb93e-4053-43f0-865c-a5d52ca89a80",s.firebaseSenderId="1010203313691",s.projectName="marketing-house",e.set("Idiom","01");break;case 4:s.onesignalAppId="abf814a3-a2bb-4ae4-9a63-422d37394e64",s.firebaseSenderId="786704296447",s.projectName="hkt369",e.set("Idiom","02");break;case 5:s.onesignalAppId="d29cd1d1-3a5b-4774-b768-a1026101ea0a",s.firebaseSenderId="823038736964",s.projectName="know-house",e.set("Idiom","01");break;case 6:s.onesignalAppId="d6e18971-f2cc-41d8-aed7-28384cb957e0",s.firebaseSenderId="823038736964",s.projectName="simples-trade",e.set("Idiom","01");break;case 7:s.onesignalAppId="a7bbe9ca-2e79-4f10-8f68-365da3e09fd5",s.firebaseSenderId="613045008970",s.projectName="r2m",e.set("Idiom","01");break;case 8:s.onesignalAppId="6b8f443d-da09-4ccc-b629-f1e21476c6b2",s.firebaseSenderId="575583616149",s.projectName="ava",e.set("Idiom","01")}Object(v.a)()&&(s.oneSignal.startInit(s.onesignalAppId,s.firebaseSenderId),s.oneSignal.handleNotificationReceived().subscribe(function(e){console.log("\n\nNOTIFICAÇÃO RECEBIDA",e)}),s.oneSignal.endInit()),e.set("Project",s.projectName).then(function(n){var i="";switch(n){case"localhost":i="http://ead.localhost";break;case"marketing-house":i="https://homolog.marketinghouse.com.br";break;case"edicom":i="https://edicom.becinteligencia.com";break;case"ead":i="https://vcc.becinteligencia.com";break;case"hkt369":i="https://descubre.hkt369.com";break;case"know-house":i="https://knowhouse.marketinghouse.com.br";break;case"simples-trade":i="https://simplestrade.becinteligencia.com";break;case"r2m":i="https://readytomarket.becinteligencia.com";break;case"ava":i="https://ava.insighttech.com.br"}e.set("GlobalUrl",i).then(function(n){return j(s,void 0,void 0,function(){var n=this;return w(this,function(s){switch(s.label){case 0:return 0,[4,new Promise(function(t,o){return j(n,void 0,void 0,function(){return w(this,function(o){switch(o.label){case 0:return[4,r.getAppVersion().then(function(o){e.set("AppConfig",o),e.set("LayoutVersion",1==o.version?"01":"02"),t()})];case 1:return[2,o.sent()]}})})})];case 1:return s.sent(),e.get("LayoutVersion").then(function(e){n.rootPage="login-page",t.ready().then(function(){o.styleDefault(),a.hide()})}),[2]}})})})})})}return e.prototype.clearStorage=function(e){["AvailableDefaultProjects"].map(function(t){e.remove(t)})},e}(),P=o(339),I=o(137),N=o(340),C=o(341),_=o(343),E=o(141),S=o(152),A=function(){return function(){}}(),M=o(53),F=o(344),T=o(345),D=o(346),R=o(347),z=o(348),L=o(349),H=o(350),O=o(351),U=o(352),x=o(416),V=o(35),Z=o(57),q=o(6),J=o(21),B=o(9),G=o(2),K=o(5),W=o(8),Y=o(27),Q=o(15),X=o(10),$=r["ɵcrt"]({encapsulation:2,styles:[],data:{}}),ee=r["ɵccf"]("ng-component",k,function(e){return r["ɵvid"](0,[(e()(),r["ɵeld"](0,0,null,null,1,"ng-component",[],null,null,null,a,$)),r["ɵdid"](1,49152,null,0,k,[f.b,K.a,g.a,m.a,y.a,b.a],null,null)],null,null)},{},{},[]),te=o(108),oe=o(342),ae=o(18),ne=o(91),re=o(84),se=o(85),ie=o(107),le=o(16),ce=o(33),de=o(39),ue=o(80),pe=o(126),me=o(55),ge=o(40),fe=o(82),he=o(72),be=o(114),ye=o(110),ve=o(81),je=o(338),we=o(109),ke=o(28),Pe=o(106),Ie=o(111),Ne=r["ɵcmf"](A,[M.b],function(e){return r["ɵmod"]([r["ɵmpd"](512,r.ComponentFactoryResolver,r["ɵCodegenComponentFactoryResolver"],[[8,[F.a,T.a,D.a,R.a,z.a,L.a,H.a,O.a,U.a,ee]],[3,r.ComponentFactoryResolver],r.NgModuleRef]),r["ɵmpd"](5120,r.LOCALE_ID,r["ɵq"],[[3,r.LOCALE_ID]]),r["ɵmpd"](4608,s.NgLocalization,s.NgLocaleLocalization,[r.LOCALE_ID,[2,s["ɵa"]]]),r["ɵmpd"](5120,r.APP_ID,r["ɵi"],[]),r["ɵmpd"](5120,r.IterableDiffers,r["ɵn"],[]),r["ɵmpd"](5120,r.KeyValueDiffers,r["ɵo"],[]),r["ɵmpd"](4608,n.c,n.q,[s.DOCUMENT]),r["ɵmpd"](6144,r.Sanitizer,null,[n.c]),r["ɵmpd"](4608,n.f,te.a,[]),r["ɵmpd"](5120,n.d,function(e,t,o,a,r){return[new n.k(e,t),new n.o(o),new n.n(a,r)]},[s.DOCUMENT,r.NgZone,s.DOCUMENT,s.DOCUMENT,n.f]),r["ɵmpd"](4608,n.e,n.e,[n.d,r.NgZone]),r["ɵmpd"](135680,n.m,n.m,[s.DOCUMENT]),r["ɵmpd"](4608,n.l,n.l,[n.e,n.m]),r["ɵmpd"](5120,oe.a,C.d,[]),r["ɵmpd"](5120,oe.c,C.e,[]),r["ɵmpd"](4608,oe.b,C.c,[oe.a,oe.c]),r["ɵmpd"](5120,r.RendererFactory2,C.f,[n.l,oe.b,r.NgZone]),r["ɵmpd"](6144,n.p,null,[n.m]),r["ɵmpd"](4608,r.Testability,r.Testability,[r.NgZone]),r["ɵmpd"](4608,n.h,n.h,[s.DOCUMENT]),r["ɵmpd"](4608,n.i,n.i,[s.DOCUMENT]),r["ɵmpd"](4608,ae.k,ae.k,[]),r["ɵmpd"](4608,ae.c,ae.c,[]),r["ɵmpd"](4608,l.c,l.c,[]),r["ɵmpd"](4608,l.h,l.b,[]),r["ɵmpd"](5120,l.j,l.k,[]),r["ɵmpd"](4608,l.i,l.i,[l.c,l.h,l.j]),r["ɵmpd"](4608,l.g,l.a,[]),r["ɵmpd"](5120,l.e,l.l,[l.i,l.g]),r["ɵmpd"](4608,i.h,i.n,[s.DOCUMENT,r.PLATFORM_ID,i.l]),r["ɵmpd"](4608,i.o,i.o,[i.h,i.m]),r["ɵmpd"](5120,i.a,function(e){return[e]},[i.o]),r["ɵmpd"](4608,i.k,i.k,[]),r["ɵmpd"](6144,i.i,null,[i.k]),r["ɵmpd"](4608,i.g,i.g,[i.i]),r["ɵmpd"](6144,i.b,null,[i.g]),r["ɵmpd"](4608,i.f,i.j,[i.b,r.Injector]),r["ɵmpd"](4608,i.c,i.c,[i.f]),r["ɵmpd"](4608,N.b,N.b,[]),r["ɵmpd"](4608,ne.b,C.b,[r.RendererFactory2,n.b]),r["ɵmpd"](4608,re.a,re.a,[B.a,G.a]),r["ɵmpd"](4608,se.a,se.a,[B.a,G.a]),r["ɵmpd"](4608,ie.a,ie.a,[]),r["ɵmpd"](4608,le.a,le.a,[]),r["ɵmpd"](4608,ce.a,ce.a,[K.a]),r["ɵmpd"](4608,de.a,de.a,[G.a,K.a,r.NgZone,X.a]),r["ɵmpd"](4608,ue.a,ue.a,[B.a,G.a]),r["ɵmpd"](5120,s.LocationStrategy,pe.c,[s.PlatformLocation,[2,s.APP_BASE_HREF],G.a]),r["ɵmpd"](4608,s.Location,s.Location,[s.LocationStrategy]),r["ɵmpd"](5120,me.b,me.d,[B.a,me.a]),r["ɵmpd"](5120,Q.a,Q.b,[B.a,me.b,s.Location,ge.b,r.ComponentFactoryResolver]),r["ɵmpd"](4608,fe.a,fe.a,[B.a,G.a,Q.a]),r["ɵmpd"](4608,he.a,he.a,[B.a,G.a]),r["ɵmpd"](4608,be.a,be.a,[B.a,G.a,Q.a]),r["ɵmpd"](4608,ye.a,ye.a,[G.a,K.a,X.a,B.a,W.l]),r["ɵmpd"](4608,ve.a,ve.a,[B.a,G.a]),r["ɵmpd"](4608,Y.a,Y.a,[K.a,G.a]),r["ɵmpd"](5120,f.b,f.d,[f.c]),r["ɵmpd"](4608,g.a,g.a,[]),r["ɵmpd"](4608,m.a,m.a,[]),r["ɵmpd"](4608,y.a,y.a,[]),r["ɵmpd"](4608,h.a,h.a,[l.e,f.b,ve.a,K.a,y.a]),r["ɵmpd"](4608,b.a,b.a,[l.e,K.a,f.b]),r["ɵmpd"](4608,c.a,c.a,[]),r["ɵmpd"](4608,s.DatePipe,s.DatePipe,[r.LOCALE_ID]),r["ɵmpd"](4608,d.a,d.a,[]),r["ɵmpd"](4608,p.a,p.a,[]),r["ɵmpd"](4608,u.a,u.a,[]),r["ɵmpd"](4608,P.a,P.a,[]),r["ɵmpd"](4608,_.a,_.a,[]),r["ɵmpd"](4608,S.a,S.a,[i.c,f.b]),r["ɵmpd"](512,s.CommonModule,s.CommonModule,[]),r["ɵmpd"](512,r.ErrorHandler,je.a,[]),r["ɵmpd"](256,G.b,{autocomplete:"off",cancelText:"Cancelar",okText:"OK",monthNames:["Janeiro","Fevereiro","Março","Abril","Maio","Junho","Julho","Agosto","Setembro","Outubto","Novembro","Dezembro"],monthShortNames:["JAN","FEV","MAR","ABR","MAI","JUN","JUL","AGO","SET","OUT","NOV","DEZ"],dayNames:["Domingo","Segunda-feira","Terça-feira","Quarta-feira","Quinta-feira","Sexta-feira","Sabado"],dayShortNames:["DOM","SEG","TER","QUA","QUI","SEX","SAB"],tabsHideOnSubPages:!0,mode:"md"},[]),r["ɵmpd"](1024,we.a,we.b,[]),r["ɵmpd"](1024,K.a,K.b,[n.b,we.a,r.NgZone]),r["ɵmpd"](1024,G.a,G.c,[G.b,K.a]),r["ɵmpd"](512,X.a,X.a,[K.a]),r["ɵmpd"](512,ke.a,ke.a,[]),r["ɵmpd"](512,B.a,B.a,[G.a,K.a,[2,ke.a]]),r["ɵmpd"](512,W.l,W.l,[B.a]),r["ɵmpd"](256,me.a,{links:[{loadChildren:"../components/download-modal/download-modal.module.ngfactory#DownloadModalModuleNgFactory",name:"download-modal",segment:"download-modal",priority:"low",defaultHistory:[]},{loadChildren:"../components/file-modal/file-modal.module.ngfactory#FileModalModuleNgFactory",name:"file-modal",segment:"file-modal",priority:"low",defaultHistory:[]},{loadChildren:"../components/list-videos-modal/list-videos-modal.module.ngfactory#ListVideosModalModuleNgFactory",name:"list-videos-modal",segment:"list-videos-modal",priority:"low",defaultHistory:[]},{loadChildren:"../components/photo-modal/photo-modal.module.ngfactory#PhotoModalModuleNgFactory",name:"photo-modal",segment:"photo-modal",priority:"low",defaultHistory:[]},{loadChildren:"../components/quiz/quiz.module.ngfactory#QuizModuleNgFactory",name:"quiz",segment:"quiz",priority:"low",defaultHistory:[]},{loadChildren:"../components/user-form/user-form.module.ngfactory#UserFormModuleNgFactory",name:"user-form-modal",segment:"user-form",priority:"low",defaultHistory:[]},{loadChildren:"../pages/my-downloads/my-downloads.module.ngfactory#MyDownloadsPageModuleNgFactory",name:"my-downloads",segment:"my-downloads",priority:"low",defaultHistory:[]},{loadChildren:"../pages/notification/notification.module.ngfactory#NotificationPageModuleNgFactory",name:"notification-page",segment:"notification",priority:"low",defaultHistory:[]},{loadChildren:"../pages/recovery-password/recovery-password.module.ngfactory#RecoveryPasswordPageModuleNgFactory",name:"recovey-password-page",segment:"recovery-password",priority:"low",defaultHistory:[]},{loadChildren:"../pages/register/register.module.ngfactory#RegisterPageModuleNgFactory",name:"register-page",segment:"register",priority:"low",defaultHistory:[]},{loadChildren:"../pages/edit-user-v02/edit-user-v02.module.ngfactory#EditUserV02PageModuleNgFactory",name:"edit-user-v02-page",segment:"edit-user-v02",priority:"low",defaultHistory:[]},{loadChildren:"../pages/edit-user/edit-user.module.ngfactory#EditUserPageModuleNgFactory",name:"edit-user-page",segment:"edit-user",priority:"low",defaultHistory:[]},{loadChildren:"../pages/login/login.module.ngfactory#LoginPageModuleNgFactory",name:"login-page",segment:"login",priority:"low",defaultHistory:[]},{loadChildren:"../pages/tabs/tabs.module.ngfactory#TabsPageModuleNgFactory",name:"tab-page",segment:"tabs",priority:"low",defaultHistory:[]},{loadChildren:"../pages/chat/chat.module.ngfactory#ChatPageModuleNgFactory",name:"chat-page",segment:"chat",priority:"low",defaultHistory:[]},{loadChildren:"../pages/list-videos-v02/list-videos-v02.module.ngfactory#ListVideosV02PageModuleNgFactory",name:"list-videos-v02-page",segment:"list-videos-v02",priority:"low",defaultHistory:[]},{loadChildren:"../pages/list-videos-v04/list-videos-v04.module.ngfactory#ListVideosPageV04ModuleNgFactory",name:"list-videos-page-v04",segment:"list-videos-v04",priority:"low",defaultHistory:[]},{loadChildren:"../pages/list-videos-v03/list-videos-v03.module.ngfactory#ListVideosV03PageModuleNgFactory",name:"list-videos-v03-page",segment:"list-videos-v03",priority:"low",defaultHistory:[]},{loadChildren:"../pages/list-videos/list-videos.module.ngfactory#ListVideosPageModuleNgFactory",name:"list-videos-page",segment:"list-videos",priority:"low",defaultHistory:[]},{loadChildren:"../pages/photo/photo.module.ngfactory#PhotoPageModuleNgFactory",name:"photo-page",segment:"photo",priority:"low",defaultHistory:[]}]},[]),r["ɵmpd"](512,r.Compiler,r.Compiler,[]),r["ɵmpd"](512,Pe.a,Pe.a,[r.Compiler]),r["ɵmpd"](1024,ge.b,ge.c,[Pe.a,r.Injector]),r["ɵmpd"](1024,r.APP_INITIALIZER,function(e,t,o,a,r,s,i,l,c,d,u,p,m){return[n.s(e),Ie.a(t),ie.b(o,a),ye.b(r,s,i,l,c),ge.d(d,u,p,m)]},[[2,r.NgProbeToken],G.a,K.a,X.a,G.a,K.a,X.a,B.a,W.l,G.a,me.a,ge.b,r.NgZone]),r["ɵmpd"](512,r.ApplicationInitStatus,r.ApplicationInitStatus,[[2,r.APP_INITIALIZER]]),r["ɵmpd"](131584,r.ApplicationRef,r.ApplicationRef,[r.NgZone,r["ɵConsole"],r.Injector,r.ErrorHandler,r.ComponentFactoryResolver,r.ApplicationInitStatus]),r["ɵmpd"](512,r.ApplicationModule,r.ApplicationModule,[r.ApplicationRef]),r["ɵmpd"](512,n.a,n.a,[[3,n.a]]),r["ɵmpd"](512,ae.j,ae.j,[]),r["ɵmpd"](512,ae.d,ae.d,[]),r["ɵmpd"](512,ae.i,ae.i,[]),r["ɵmpd"](512,pe.a,pe.a,[]),r["ɵmpd"](512,f.a,f.a,[]),r["ɵmpd"](512,l.f,l.f,[]),r["ɵmpd"](512,i.e,i.e,[]),r["ɵmpd"](512,i.d,i.d,[]),r["ɵmpd"](512,I.b,I.b,[]),r["ɵmpd"](512,N.a,N.a,[]),r["ɵmpd"](512,C.a,C.a,[]),r["ɵmpd"](512,E.AngularCropperjsModule,E.AngularCropperjsModule,[]),r["ɵmpd"](512,A,A,[]),r["ɵmpd"](256,i.l,"XSRF-TOKEN",[]),r["ɵmpd"](256,i.m,"X-XSRF-TOKEN",[]),r["ɵmpd"](256,M.a,k,[]),r["ɵmpd"](256,s.APP_BASE_HREF,"/",[]),r["ɵmpd"](256,f.c,{name:"__moveraDB"},[])])});Object(r.enableProdMode)(),Object(n.j)().bootstrapModuleFactory(Ne)},395:function(e,t,o){function a(e){return o(n(e))}function n(e){var t=r[e];if(!(t+1))throw new Error("Cannot find module '"+e+"'.");return t}var r={"./af":207,"./af.js":207,"./ar":208,"./ar-dz":209,"./ar-dz.js":209,"./ar-kw":210,"./ar-kw.js":210,"./ar-ly":211,"./ar-ly.js":211,"./ar-ma":212,"./ar-ma.js":212,"./ar-sa":213,"./ar-sa.js":213,"./ar-tn":214,"./ar-tn.js":214,"./ar.js":208,"./az":215,"./az.js":215,"./be":216,"./be.js":216,"./bg":217,"./bg.js":217,"./bm":218,"./bm.js":218,"./bn":219,"./bn.js":219,"./bo":220,"./bo.js":220,"./br":221,"./br.js":221,"./bs":222,"./bs.js":222,"./ca":223,"./ca.js":223,"./cs":224,"./cs.js":224,"./cv":225,"./cv.js":225,"./cy":226,"./cy.js":226,"./da":227,"./da.js":227,"./de":228,"./de-at":229,"./de-at.js":229,"./de-ch":230,"./de-ch.js":230,"./de.js":228,"./dv":231,"./dv.js":231,"./el":232,"./el.js":232,"./en-SG":233,"./en-SG.js":233,"./en-au":234,"./en-au.js":234,"./en-ca":235,"./en-ca.js":235,"./en-gb":236,"./en-gb.js":236,"./en-ie":237,"./en-ie.js":237,"./en-il":238,"./en-il.js":238,"./en-nz":239,"./en-nz.js":239,"./eo":240,"./eo.js":240,"./es":241,"./es-do":242,"./es-do.js":242,"./es-us":243,"./es-us.js":243,"./es.js":241,"./et":244,"./et.js":244,"./eu":245,"./eu.js":245,"./fa":246,"./fa.js":246,"./fi":247,"./fi.js":247,"./fo":248,"./fo.js":248,"./fr":249,"./fr-ca":250,"./fr-ca.js":250,"./fr-ch":251,"./fr-ch.js":251,"./fr.js":249,"./fy":252,"./fy.js":252,"./ga":253,"./ga.js":253,"./gd":254,"./gd.js":254,"./gl":255,"./gl.js":255,"./gom-latn":256,"./gom-latn.js":256,"./gu":257,"./gu.js":257,"./he":258,"./he.js":258,"./hi":259,"./hi.js":259,"./hr":260,"./hr.js":260,"./hu":261,"./hu.js":261,"./hy-am":262,"./hy-am.js":262,"./id":263,"./id.js":263,"./is":264,"./is.js":264,"./it":265,"./it-ch":266,"./it-ch.js":266,"./it.js":265,"./ja":267,"./ja.js":267,"./jv":268,"./jv.js":268,"./ka":269,"./ka.js":269,"./kk":270,"./kk.js":270,"./km":271,"./km.js":271,"./kn":272,"./kn.js":272,"./ko":273,"./ko.js":273,"./ku":274,"./ku.js":274,"./ky":275,"./ky.js":275,"./lb":276,"./lb.js":276,"./lo":277,"./lo.js":277,"./lt":278,"./lt.js":278,"./lv":279,"./lv.js":279,"./me":280,"./me.js":280,"./mi":281,"./mi.js":281,"./mk":282,"./mk.js":282,"./ml":283,"./ml.js":283,"./mn":284,"./mn.js":284,"./mr":285,"./mr.js":285,"./ms":286,"./ms-my":287,"./ms-my.js":287,"./ms.js":286,"./mt":288,"./mt.js":288,"./my":289,"./my.js":289,"./nb":290,"./nb.js":290,"./ne":291,"./ne.js":291,"./nl":292,"./nl-be":293,"./nl-be.js":293,"./nl.js":292,"./nn":294,"./nn.js":294,"./pa-in":295,"./pa-in.js":295,"./pl":296,"./pl.js":296,"./pt":297,"./pt-br":298,"./pt-br.js":298,"./pt.js":297,"./ro":299,"./ro.js":299,"./ru":300,"./ru.js":300,"./sd":301,"./sd.js":301,"./se":302,"./se.js":302,"./si":303,"./si.js":303,"./sk":304,"./sk.js":304,"./sl":305,"./sl.js":305,"./sq":306,"./sq.js":306,"./sr":307,"./sr-cyrl":308,"./sr-cyrl.js":308,"./sr.js":307,"./ss":309,"./ss.js":309,"./sv":310,"./sv.js":310,"./sw":311,"./sw.js":311,"./ta":312,"./ta.js":312,"./te":313,"./te.js":313,"./tet":314,"./tet.js":314,"./tg":315,"./tg.js":315,"./th":316,"./th.js":316,"./tl-ph":317,"./tl-ph.js":317,"./tlh":318,"./tlh.js":318,"./tr":319,"./tr.js":319,"./tzl":320,"./tzl.js":320,"./tzm":321,"./tzm-latn":322,"./tzm-latn.js":322,"./tzm.js":321,"./ug-cn":323,"./ug-cn.js":323,"./uk":324,"./uk.js":324,"./ur":325,"./ur.js":325,"./uz":326,"./uz-latn":327,"./uz-latn.js":327,"./uz.js":326,"./vi":328,"./vi.js":328,"./x-pseudo":329,"./x-pseudo.js":329,"./yo":330,"./yo.js":330,"./zh-cn":331,"./zh-cn.js":331,"./zh-hk":332,"./zh-hk.js":332,"./zh-tw":333,"./zh-tw.js":333};a.keys=function(){return Object.keys(r)},a.resolve=n,e.exports=a,a.id=395},59:function(e,t,o){"use strict";o.d(t,"a",function(){return i});o(4);var a=o(65),n=o(206),r=(o.n(n),o(58),this&&this.__awaiter||function(e,t,o,a){return new(o||(o=Promise))(function(n,r){function s(e){try{l(a.next(e))}catch(e){r(e)}}function i(e){try{l(a.throw(e))}catch(e){r(e)}}function l(e){e.done?n(e.value):new o(function(t){t(e.value)}).then(s,i)}l((a=a.apply(e,t||[])).next())})}),s=this&&this.__generator||function(e,t){function o(o){return function(s){return function(o){if(a)throw new TypeError("Generator is already executing.");for(;i;)try{if(a=1,n&&(r=n[2&o[0]?"return":o[0]?"throw":"next"])&&!(r=r.call(n,o[1])).done)return r;switch(n=0,r&&(o=[0,r.value]),o[0]){case 0:case 1:r=o;break;case 4:return i.label++,{value:o[1],done:!1};case 5:i.label++,n=o[1],o=[0];continue;case 7:o=i.ops.pop(),i.trys.pop();continue;default:if(r=i.trys,!(r=r.length>0&&r[r.length-1])&&(6===o[0]||2===o[0])){i=0;continue}if(3===o[0]&&(!r||o[1]>r[0]&&o[1]<r[3])){i.label=o[1];break}if(6===o[0]&&i.label<r[1]){i.label=r[1],r=o;break}if(r&&i.label<r[2]){i.label=r[2],i.ops.push(o);break}r[2]&&i.ops.pop(),i.trys.pop();continue}o=t.call(e,i)}catch(e){o=[6,e],n=0}finally{a=r=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,s])}}var a,n,r,s,i={label:0,sent:function(){if(1&r[0])throw r[1];return r[1]},trys:[],ops:[]};return s={next:o(0),throw:o(1),return:o(2)},"function"==typeof Symbol&&(s[Symbol.iterator]=function(){return this}),s},i=function(){function e(e,t,o){var n=this;this.http=e,this._platform=t,this.storage=o,this.url="",this.getUrl=function(){return r(n,void 0,void 0,function(){var e=this;return s(this,function(t){switch(t.label){case 0:return[4,new Promise(function(t,o){e.storage.get("Project").then(function(o){switch(o){case"localhost":e.url="/lch",e._platform.is("cordova")&&(e.url="http://ead.localhost");break;case"marketing-house":e.url="/mkh",e._platform.is("cordova")&&(e.url="https://homolog.marketinghouse.com.br");break;case"edicom":e.url="/edc",e._platform.is("cordova")&&(e.url="https://edicom.becinteligencia.com");break;case"hkt369":e.url="/hkt369",e._platform.is("cordova")&&(e.url="https://descubre.hkt369.com");break;case"know-house":e.url="/knowh",e._platform.is("cordova")&&(e.url="https://knowhouse.marketinghouse.com.br");break;case"simples-trade":e.url="/strade",e._platform.is("cordova")&&(e.url="https://simplestrade.becinteligencia.com");break;case"r2m":e.url="/r2m",e._platform.is("cordova")&&(e.url="https://readytomarket.becinteligencia.com");break;case"ava":e.url="/ava",e._platform.is("cordova")&&(e.url="https://ava.insighttech.com.br");break;default:e.url="/vcc",e._platform.is("cordova")&&(e.url="https://vcc.becinteligencia.com")}t(e.url)})})];case 1:return[2,t.sent()]}})})},this.getAppVersion=function(){return r(n,void 0,void 0,function(){var e,t=this;return s(this,function(o){switch(o.label){case 0:return[4,this.getUrl()];case 1:return e=o.sent(),[4,new Promise(function(o,n){var r=new a.d;r.append("Content-Type","application/json");var s=new a.g({headers:r});t.http.get(e+"/confsapp",s).subscribe(function(e){return o(e.json())})})];case 2:return[2,o.sent()]}})})},this.getUrl()}return e.prototype.getAll=function(e,t,o){var n=new a.d;if(!o){var r=new a.g({headers:n});return this.http.post(this.url+e,t,r).map(function(e){return e.json()})}if("get"==o){r=new a.g({headers:n,params:t});return this.http.get(this.url+e,r).map(function(e){return e.json()})}if("put"==o){r=new a.g({headers:n,params:t});return this.http.put(this.url+e,t,r).map(function(e){return e.json()})}},e.prototype.post=function(e,t,o){var n=new a.d;o?"form-data"==o&&n.append("enctype","multipart/form-data; boundary=----WebKitFormBoundaryuL67FWkv1CA"):n.append("Content-Type","application/json");var r=new a.g({headers:n});return this.http.post(this.url+e,t,r)},e}()}},[357]);