import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { HttpClientModule } from '@angular/common/http';

import { MyApp } from './app.component';

import { LoginPage } from '../pages/login/login';
import { HomePage } from '../pages/home/home';
import { TranslatorPage } from '../pages/translator/translator';
import { TabsPage } from '../pages/tabs/tabs';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';

import { Facebook } from '@ionic-native/facebook';
import { RestProvider } from '../providers/rest/rest';

export const firebaseConfig = {
  apiKey: "AIzaSyCTN8OIMmNW_SnQeFO4XLrjLCXVH_KEj2c",
  authDomain: "kreol-vocabulary-list.firebaseapp.com",
  databaseURL: "https://kreol-vocabulary-list.firebaseio.com",
  projectId: "kreol-vocabulary-list",
  storageBucket: "kreol-vocabulary-list.appspot.com",
  messagingSenderId: "457624089712"
};

@NgModule({
  declarations: [
    MyApp,
    LoginPage,
    HomePage,
    TranslatorPage,
    TabsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    HttpClientModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    LoginPage,
    HomePage,
    TranslatorPage,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    Facebook,
    RestProvider
  ]
})
export class AppModule {}
