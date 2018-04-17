import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import { Response } from '@angular/http';

/*
  Generated class for the ContentProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ContentProvider {
  private url = "http://inforadix.com/projects/appointments/API/";
  
  constructor(public http: HttpClient) {
    console.log('Hello ContentProvider Provider');
  }

  getdata(){
    return this.http.get(this.url)
    .do(this.logResponse);
    
     //  return new Promise((resolve, reject) =>{
    //    let headers =  new Headers();
    //    this.http.post(this.url+type,data)
    //    .subscribe(res =>{
    //      resolve(res);
    //    }, (err) =>{
    //      reject(err);
    //    }); 
 
    //  }); 
   }

   getAuth(data,type){
    // this.http.post(this.urlSignup,)
     //.map((response: Response) => response.json());
     return new Promise((resolve, reject) =>{
      // let headers =  new Headers();
       this.http.post(this.url+type,data)
       .subscribe(res =>{
         resolve(res);
       }, (err) =>{
         reject(err);
       }); 
 
     }); 
   }
  private logResponse(res: Response){
    console.log(res);

  }
  
}
