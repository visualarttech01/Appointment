import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ImagePicker } from '@ionic-native/image-picker';
import { Base64 } from '@ionic-native/base64';
/**
 * Generated class for the PickerPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-picker',
  templateUrl: 'picker.html',
})
export class PickerPage {
  public path:string;
  constructor(public navCtrl: NavController,
    private base64: Base64,
    private imagePicker: ImagePicker,
    public navParams: NavParams) {
      this.path="../assets/imgs/logo.png";
    }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PickerPage');
  }

  getImage(){
    let options = {
      title: "Select Image",
      message: "Select Only Onle Image",
      maximumImagesCount: 1,
      outputType: 0
    };
    this.imagePicker.getPictures(options).then((results) => {
      for (var i = 0; i < results.length; i++) {
        this.path =results[i];   
        console.log('Image URI: ' + results[i]);
      }
    }, (err) => { });
  
  } 
}
