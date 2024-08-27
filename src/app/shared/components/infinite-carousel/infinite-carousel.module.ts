import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InfiniteCarouselComponent } from './infinite-carousel/infinite-carousel.component';

@NgModule({
  declarations: [
    InfiniteCarouselComponent
  ],
  exports: [InfiniteCarouselComponent],
  imports: [
    CommonModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class InfiniteCarouselModule { }
