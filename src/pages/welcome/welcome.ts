import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LoginPage } from '../../pages/login/login';
import { SignupUserPage } from '../../pages/signup-user/signup-user';
import { SignupProviderPage } from '../../pages/signup-provider/signup-provider';

/**
 * Generated class for the WelcomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-welcome',
  templateUrl: 'welcome.html',
})
export class WelcomePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad WelcomePage');
  }

  user(){
    this.navCtrl.push('SignupUserPage');
  }
  login(){
    this.navCtrl.push('LoginPage');
  }
  provider(){
    this.navCtrl.push('SignupProviderPage');
  }

}
