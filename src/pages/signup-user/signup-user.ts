import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {FormBuilder, FormGroup, Validator, AbstractControl, Validators} from '@angular/forms';
import { ContentProvider } from '../../providers/content/content';

/**
 * Generated class for the SignupUserPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-signup-user',
  templateUrl: 'signup-user.html',
})
export class SignupUserPage {
 
  public signupData:any={};
  public dateBirth:any;
  formGroup: FormGroup;
  email:AbstractControl;
  password:AbstractControl;
  name:AbstractControl;
  gender:AbstractControl;
  date:AbstractControl;
  month:AbstractControl;
  year:AbstractControl;
  phone:AbstractControl;
  area:AbstractControl;
  city:AbstractControl;
  zipcode:AbstractControl;
  private resData:any;
  private user_type = "Customer";
  constructor(public navCtrl: NavController, 
    public formBuilder: FormBuilder,
    private contentProvider: ContentProvider,
    public navParams: NavParams) {
    
    this.formGroup = this.formBuilder.group({
      
      name:['',Validators.required],
      email:['',Validators.required],
      phone:['',Validators.required],
      password:['',Validators.required],
      gender:['',Validators.required],
      date:['',Validators.required],
      month:['',Validators.required],
      year:['',Validators.required],
      area:['',Validators.required],
      city:['',Validators.required],
      zipcode:['',Validators.required],
    });
    this.name = this.formGroup.controls['name'];
    this.email = this.formGroup.controls['email'];
    this.phone = this.formGroup.controls['phone'];
    this.password = this.formGroup.controls['password'];
    this.gender = this.formGroup.controls['gender'];
    this.date = this.formGroup.controls['date'];
    this.month = this.formGroup.controls['month'];
    this.year = this.formGroup.controls['year'];
    this.city = this.formGroup.controls['city'];
    this.zipcode = this.formGroup.controls['zipcode'];
    this.area = this.formGroup.controls['area'];
    //this.dateBirth= this.year.value+"-"+this.month.value+"-"+this.date.value;
    
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SignupUserPage');
  }

  signup(){
    this.signupData = JSON.stringify({"user_type": this.user_type,"name": this.name.value,"gender": this.gender.value,"dateofbirth":this.year.value+"-"+this.month.value+"-"+this.date.value,"email":this.email.value,"phone":this.phone.value,"password": this.password.value,"Address":{"address": this.area.value,"zipcode": this.zipcode.value,"city": this.city.value,"country_id": "162"}});
      // this.signupData = JSON.stringify({"user_type": this.user_type,"name": this.name.value,"gender": this.gender.value,"dateofbirth":this.date.value,"email":this.email.value,"phone":this.phone.value,"password": this.password.value,"Address":{"address":this.area.value}});
      this.contentProvider.getAuth(this.signupData,"new_user").then((result) =>{
        this.resData = result;
        
      });
      console.log(this.resData);
    //console.log(this.dateBirth,'dat');
     console.log(this.signupData,'dat');
    }
  
}
