import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SignupProviderPage } from './signup-provider';

@NgModule({
  declarations: [
    SignupProviderPage,
  ],
  imports: [
    IonicPageModule.forChild(SignupProviderPage),
  ],
})
export class SignupProviderPageModule {}
