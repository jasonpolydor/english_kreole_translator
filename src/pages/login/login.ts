import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';

import { Platform } from 'ionic-angular';
import { Facebook } from '@ionic-native/facebook';

import { TabsPage } from '../tabs/tabs';

/**
 * Generated class for the LoginPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  
  displayName;  

  constructor(public navCtrl: NavController, public navParams: NavParams, 
  private afAuth: AngularFireAuth, private fb: Facebook, private platform: Platform) {
    afAuth.authState.subscribe(user=>{
      if(!user){
        // this.navCtrl.setRoot(LoginPage);
        this.displayName = null;
        return;
      }
      this.displayName = user.displayName; 
      // this.navCtrl.setRoot(TabsPage);
    });
  }
  
  signInWithFacebook() {
    if (this.platform.is('cordova')) {
      return this.fb.login(['email', 'public_profile']).then(res => {
        const facebookCredential = firebase.auth.FacebookAuthProvider.credential(res.authResponse.accessToken);
        return firebase.auth().signInWithCredential(facebookCredential);
      })
    }
    else {
      return this.afAuth.auth
        .signInWithPopup(new firebase.auth.FacebookAuthProvider())
        .then(function(result) {
          console.log("Signed in as:", result.user.uid);
        }).catch(function(error) {
          console.error("Authentication failed:", error);
        });
    }
  }
  
  signOut() {
    this.afAuth.auth.signOut();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

}
