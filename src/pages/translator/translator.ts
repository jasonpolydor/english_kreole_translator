import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { AngularFireDatabase } from 'angularfire2/database';
import firebase from 'firebase';

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
  translationListRef: firebase.database.Reference;
  translationList:Array<any>;
  loadedTranslationList:Array<any>;
  
  constructor(public navCtrl: NavController, public navParams: NavParams,
  afDB: AngularFireDatabase) {
    this.translationListRef = firebase.database().ref('/translations');
    
    this.translationListRef.on('value', translationList => {
      let translations = [];
      translationList.forEach( translation => {
        translations.push(translation.val());
        return false;
      });

      this.translationList = translations;
      this.loadedTranslationList = translations;
    });
  }
  
  initializeItems() {
    this.translationList = this.loadedTranslationList;
  }
  
  getItems(ev: any) {
    // Reset items back to all of the items
    this.initializeItems();

    // set val to the value of the searchbar
    let val = ev.target.value;

    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      this.translationList = this.translationList.filter((item) => {
        return (item.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
  }
  
  ionViewDidLoad() {
    console.log('ionViewDidLoad TranslatorPage');
  }

}
