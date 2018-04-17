import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {ContentProvider} from '../../providers/content/content';

/**
 * Generated class for the InitPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-init',
  templateUrl: 'init.html',
})

export class InitPage {
  public allData:any;
  public allCat:any;
  public allApnt:any;
  public allCustomer:any;
  constructor(public navCtrl: NavController,
    private contentProvider: ContentProvider,
    public navParams: NavParams) {
      this.contentProvider.getdata()
      .subscribe(
        res =>{console.log(res,'arif');this.allData = res;console.log(this.allData,'data');
        console.log(this.allData,'after');
        this.allCat= this.allData.Categories;
        this.allApnt= this.allData.Appointments;
        this.allCustomer= this.allData.Custumers;
        //console.log(this.allCat,'cat',this.allApnt,'apnt',this.allCustomer,'cus');
      
      }
      );
      
      console.log(this.allData,'after');
      //JSON.stringify(this.allData)
      
    }

  ionViewDidLoad() {
   
 
}
show(){
  
}
}
