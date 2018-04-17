import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {FormBuilder, FormGroup, Validator, AbstractControl, Validators} from '@angular/forms';

/**
 * Generated class for the SignupProviderPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-signup-provider',
  templateUrl: 'signup-provider.html',
})
export class SignupProviderPage {
  public signupData:any={};
  public dateBirth:any;
  
  slideOneForm: FormGroup;
  slideTwoForm: FormGroup;
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
  public img;
  private user_type = "Provider";
  constructor(public navCtrl: NavController, 
    public formBuilder: FormBuilder,
   
    public navParams: NavParams) {
 
  // this.slideTwoForm = formBuilder.group({
  
  // });

    this.slideOneForm = this.formBuilder.group({
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
    this.name = this.slideOneForm.controls['name'];
    this.email = this.slideOneForm.controls['email'];
    this.phone = this.slideOneForm.controls['phone'];
    this.password = this.slideOneForm.controls['password'];
    this.gender = this.slideOneForm.controls['gender'];
    this.date = this.slideOneForm.controls['date'];
    this.month = this.slideOneForm.controls['month'];
    this.year = this.slideOneForm.controls['year'];
    this.city = this.slideOneForm.controls['city'];
    this.zipcode = this.slideOneForm.controls['zipcode'];
    this.area = this.slideOneForm.controls['area'];
    
    //this.dateBirth= this.year.value+"-"+this.month.value+"-"+this.date.value;
        
    //     let filePath = this.img;
    // this.base64.encodeFile(filePath).then((base64File: string) => {
    //   console.log(base64File);
    // }, (err) => {
    //   console.log(err);
    // });
      
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SignupUserPage');
    
  }


  signup(){
    this.signupData = JSON.stringify({"user_type": this.user_type,"name": this.name.value,"gender": this.gender.value,"dateofbirth":this.year.value+"-"+this.month.value+"-"+this.date.value,"email":this.email.value,"phone":this.phone.value,"password": this.password.value,"Address":{"address": this.area.value,"zipcode": this.zipcode.value,"city": this.city.value,"country_id": "162"}});

    }
  
    getproviderimg(){
     
    }

    

  }