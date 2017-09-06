import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

/**
 * Generated class for the TranslatorPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-translator',
  templateUrl: 'translator.html',
})
export class TranslatorPage {
  items: FirebaseListObservable<any[]>;
  
  constructor(public navCtrl: NavController, public navParams: NavParams,
  afDB: AngularFireDatabase) {
    this.items = afDB.list('/translations');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TranslatorPage');
  }

}
