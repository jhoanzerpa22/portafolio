import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WorkRoutingModule } from './work.routes';
import { TranslateModule } from '@ngx-translate/core';
import { WorkComponent } from './work/work.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { CardComponent } from './components/card/card.component';

@NgModule({
  declarations: [WorkComponent, CarouselComponent, CardComponent],
  imports: [
    CommonModule,
    TranslateModule,
    WorkRoutingModule,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})

export class WorkModule { }
