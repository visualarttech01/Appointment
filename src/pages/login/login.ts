import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {FormBuilder, FormGroup, Validator, AbstractControl, Validators} from '@angular/forms';
import { ContentProvider } from '../../providers/content/content';
/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  public userData:any={};
  formGroup: FormGroup;
  email:AbstractControl;
  password:AbstractControl;
  resData:any;
  
  constructor(public navCtrl: NavController, 
    private formBuilder: FormBuilder,
    private contentProvider: ContentProvider,
    public navParams: NavParams) {
      this.formGroup = this.formBuilder.group({
        email:['',Validators.required],
        password:['',Validators.required]
    });  
    if(!this.formGroup.hasError('required')){
    this.email = this.formGroup.controls['email'];
    this.password = this.formGroup.controls['password'];
  }
    }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
    
  }
  signin(){
    this.userData = JSON.stringify({email: this.email.value,password: this.password.value});
    this.contentProvider.getAuth(this.userData,"login").then((result) =>{
      this.resData = result;
      
    });
    console.log(this.resData,this.userData);
  }


}
