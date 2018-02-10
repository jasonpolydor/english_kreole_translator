import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { RestProvider } from  '../../providers/rest/rest';

/**
 * Generated class for the HomePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {

  countries: string[];
  errorMsg: string;

  constructor(public navCtrl: NavController, public navParams: NavParams,
              public rest: RestProvider) {
  }

  ionViewDidLoad() {
    this.getCountries();
  }

  getCountries(){
    //Observables are a new way of pushing data in JavaScript.
    //An observable is a Producer of multiple values, “pushing” them to subscribers.
    //Manually subscribe to this method
    //Remember, observables are lazy. If you don’t subscribe nothing is going to happen.
    this.rest.getCountries()
        .subscribe(
            countries => this.countries = countries,
            //“next”: sends any value such as Numbers, Arrays or objects to it’s subscribers.
            error => this.errorMsg = <any> error
            //“error”: sends a Javascript error or exception
        );
  }
}
