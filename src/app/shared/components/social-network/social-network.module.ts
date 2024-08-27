import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SocialNetworkComponent } from './social-network/social-network.component';
import { ContactModule } from '../contact/contact.module';



@NgModule({
  declarations: [SocialNetworkComponent],
  exports: [SocialNetworkComponent],
  imports: [
    CommonModule,
    ContactModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class SocialNetworkModule { }
